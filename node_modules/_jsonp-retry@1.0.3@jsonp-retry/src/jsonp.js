import assign from 'object-assign'

import { serializeParams, isFunction, getUrlQueryParamByName, updateQueryStringParamByName } from './lib'
import store from './store'

const win = typeof window !== 'undefined' ? window : global

const canUsePromise = (function () {
  return 'Promise' in win &&
    typeof isFunction(Promise)
})()

const noop = function () {}

const encodeC = encodeURIComponent
const doc = win.document
const head = doc ? (doc.head || doc.getElementsByTagName('head')[0]) : null

const TIMEOUT_CONST = 2000

const defaultConfig = {
  timeout: TIMEOUT_CONST,
  retryTimes: 2,
  backup: null,
  params: {},
  jsonp: 'callback',
  name: null,
  cache: false,
  useStore: false,
  storeCheck: null,
  storeSign: null,
  storeCheckKey: null,
  dataCheck: null,
  charset: 'UTF-8'
}

let timestamp = new Date().getTime()

function jsonp (url, opts, cb) {
  if (isFunction(url)) {
    cb = url
    opts = {}
  } else if (url && typeof url === 'object') {
    cb = opts
    opts = url || {}
    url = opts.url
  }
  if (isFunction(opts)) {
    cb = opts
    opts = {}
  }
  if (!opts) {
    opts = {}
  }
  opts = assign({}, defaultConfig, opts)
  url = url || opts.url
  cb = cb || noop
  if (!url || typeof url !== 'string') {
    cb(new Error('Param url is needed!'))
    if (!jsonp.promiseClose && canUsePromise) {
      return new Promise((resolve, reject) => {
        return reject(new Error('Param url is needed!'))
      })
    }
    return
  }
  const urlWithParams = generateJsonpUrlWithParams(url, opts.params)
  // first get data from store
  const datafromStore = getDataFromStore({
    useStore: opts.useStore,
    storeKey: urlWithParams,
    storeCheck: opts.storeCheck,
    storeCheckKey: opts.storeCheckKey,
    storeSign: opts.storeSign,
    dataCheck: opts.dataCheck
  })
  if (datafromStore) {
    cb(null, datafromStore)
    if (!jsonp.promiseClose && canUsePromise) {
      return new Promise(resolve => {
        return resolve(datafromStore)
      })
    }
    return
  }
  opts.originalUrl = urlWithParams
  if (!jsonp.promiseClose && canUsePromise) {
    return new Promise((resolve, reject) => {
      fetchData(urlWithParams, opts, (err, data) => {
        if (err) {
          cb(err)
          return reject(err)
        }
        cb(null, data)
        resolve(data)
      })
    })
  }
  fetchData(urlWithParams, opts, cb)
}

function generateJsonpUrlWithParams (url, params) {
  params = typeof params === 'string' ? params : serializeParams(params)
  url += (~url.indexOf('?') ? '&' : '?') + `${params}`
  url = url.replace('?&', '?')
  return url
}

function fetchData (url, opts, cb) {
  const originalUrl = opts.originalUrl
  const charset = opts.charset
  const jsonpUrlQueryParam = getUrlQueryParamByName(url, opts.jsonp)
  const funcId = (jsonpUrlQueryParam === '?' ? false : jsonpUrlQueryParam) || opts.name || `__jsonp${timestamp++}`
  const gotoBackupInfo = arguments[3] || null
  if (jsonpUrlQueryParam) {
    if (jsonpUrlQueryParam === '?') {
      url = updateQueryStringParamByName(url, opts.jsonp, encodeC(funcId))
    }
  } else {
    url += (url.split('').pop() === '&' ? '' : '&') + `${opts.jsonp}=${encodeC(funcId)}`
  }
  if (!opts.cache) {
    url += (url.split('').pop() === '&' ? '' : '&') + `_=${new Date().getTime()}`
  }

  // move prev callback into next when fetch parallel with same funcId
  clearTimeout(win['timer_' + funcId])
  const prevFunc = win[funcId]
  win[funcId] = function (data) {
    prevFunc && prevFunc(data)
    cleanup(funcId)
    if (gotoBackupInfo) {
      data.__$$backupCall = gotoBackupInfo
    }
    if (opts.dataCheck) {
      if (opts.dataCheck(data) !== false) {
        // write data to store
        setDataToStore({
          useStore: opts.useStore,
          storeKey: originalUrl,
          data
        })
        return cb(null, data)
      }
      if (fallback(originalUrl, opts, cb) === false) {
        cb(new Error('Data check error, and no fallback'))
      }
    } else {
      // write data to store
      setDataToStore({
        useStore: opts.useStore,
        storeKey: originalUrl,
        data
      })
      cb(null, data)
    }
  }
  const script = appendScriptTagToHead({
    url,
    charset
  })

  const timeout = opts.timeout != null ? opts.timeout : TIMEOUT_CONST
  // when timeout, will try to retry
  win['timer_' + funcId] = setTimeout(() => {
    cleanup(funcId)
    // no retryTimes left, go to backup
    if (typeof opts.retryTimes === 'number' && opts.retryTimes > 0) {
      opts.retryTimes--
      return fetchData(originalUrl, opts, cb)
    }
    if (fallback(originalUrl, opts, cb) === false) {
      return cb(new Error('Timeout and no data return'))
    }
  }, timeout)

  function cleanup (funcId) {
    if (script.parentNode) {
      script.parentNode.removeChild(script)
    }
    win[funcId] = noop
    clearTimeout(win['timer_' + funcId])
  }
}

function storeCheckFn (storeData, storeCheckKey, storeSign) {
  if (storeData && storeCheckKey && storeSign) {
    return storeData[storeCheckKey] && storeData[storeCheckKey] === storeSign
  }
  return false
}

function getDataFromStore ({ useStore, storeKey, storeCheck, storeCheckKey, storeSign, dataCheck }) {
  useStore = useStore ? store.enabled : false
  if (useStore) {
    const storeData = store.get(storeKey)
    storeCheck = storeCheck || storeCheckFn
    if (storeCheck(storeData, storeCheckKey, storeSign)) {
      if (!dataCheck || (storeData && dataCheck && dataCheck(storeData) !== false)) {
        return storeData
      }
    }
  }
  return null
}

function getDataFromStoreWithoutCheck ({ useStore, storeKey, dataCheck }) {
  useStore = useStore ? store.enabled : false
  if (useStore) {
    const storeData = store.get(storeKey)
    if (!dataCheck || (storeData && dataCheck && dataCheck(storeData) !== false)) {
      return storeData
    }
  }
  return null
}

function setDataToStore ({ useStore, storeKey, data }) {
  useStore = useStore ? store.enabled : false
  if (useStore) {
    store.set(storeKey, data)
  }
}

function fallback (url, opts, cb) {
  const backup = opts.backup
  let backupWithParams
  if (backup) {
    if (typeof backup === 'string') {
      delete opts.backup
      backupWithParams = generateJsonpUrlWithParams(backup, opts.params)
      return fetchData(backupWithParams, opts, cb, {
        backup
      })
    } else if (Array.isArray(backup)) {
      if (backup.length) {
        const backupUrl = backup.shift()
        backupWithParams = generateJsonpUrlWithParams(backupUrl, opts.params)
        return fetchData(backupWithParams, opts, cb, {
          backup: backupUrl
        })
      }
    }
  }
  // no backup to use, try to get data from store
  const dataFromStoreWithoutCheck = getDataFromStoreWithoutCheck({
    useStore: opts.useStore,
    storeKey: url,
    dataCheck: opts.dataCheck
  })
  if (dataFromStoreWithoutCheck) {
    cb(null, dataFromStoreWithoutCheck)
    return true
  }
  return false
}

export function appendScriptTagToHead ({ url, charset }) {
  if (!doc) {
    return
  }
  const script = doc.createElement('script')
  script.type = 'text/javascript'
  if (charset) {
    script.charset = charset
  }
  script.src = url
  head.appendChild(script)
  return script
}

export default jsonp
