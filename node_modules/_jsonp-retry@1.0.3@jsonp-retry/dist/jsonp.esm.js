/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign$1 = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var enc = encodeURIComponent;

function serializeParams(params) {
  if (!params) {
    return '';
  }
  return Object.keys(params).map(function (item) {
    return item + '=' + enc(params[item]);
  }).join('&');
}

function isFunction(fn) {
  return typeof fn === 'function';
}

function getUrlQueryParamByName(url, name) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[[]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function updateQueryStringParamByName(url, name, value) {
  var re = new RegExp('([?&])' + name + '=.*?(&|$)', 'i');
  var separator = url.indexOf('?') !== -1 ? '&' : '?';
  if (url.match(re)) {
    return url.replace(re, '$1' + name + '=' + value + '$2');
  }
  return url + separator + name + '=' + value;
}

var win$1 = typeof window !== 'undefined' ? window : global;
var localStorageName = 'localStorage';
var storage = win$1[localStorageName];

var store = {
  disabled: false,
  set: function set(key, val) {
    if (val === void 666) {
      return store.remove(key);
    }
    storage.setItem(key, store.serialize(val));
    return val;
  },
  get: function get(key, defaultVal) {
    var val = store.deserialize(storage.getItem(key));
    return val === undefined ? defaultVal : val;
  },
  remove: function remove(key) {
    storage.removeItem(key);
  },
  clear: function clear() {
    storage.clear();
  },
  has: function has(key) {
    return store.get(key) !== void 666;
  },
  forEach: function forEach(callback) {
    for (var i = 0; i < storage.length; i++) {
      var key = storage.key(i);
      callback(key, store.get(key));
    }
  },
  getAll: function getAll() {
    var ret = {};
    store.forEach(function (key, val) {
      ret[key] = val;
    });
    return ret;
  },
  serialize: function serialize(value) {
    return JSON.stringify(value);
  },
  deserialize: function deserialize(value) {
    if (typeof value !== 'string') {
      return;
    }
    try {
      return JSON.parse(value);
    } catch (err) {
      return value || void 666;
    }
  }
};

try {
  var testKey = '__store__';
  store.set(testKey, testKey);
  if (store.get(testKey) !== testKey) {
    store.disabled = true;
  }
  store.remove(testKey);
} catch (err) {
  store.disabled = true;
}
store.enabled = !store.disabled;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var win = typeof window !== 'undefined' ? window : global;

var canUsePromise = function () {
  return 'Promise' in win && _typeof(isFunction(Promise));
}();

var noop = function noop() {};

var encodeC = encodeURIComponent;
var doc = win.document;
var head = doc ? doc.head || doc.getElementsByTagName('head')[0] : null;

var TIMEOUT_CONST = 2000;

var defaultConfig = {
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
};

var timestamp = new Date().getTime();

function jsonp$1(url, opts, cb) {
  if (isFunction(url)) {
    cb = url;
    opts = {};
  } else if (url && (typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
    cb = opts;
    opts = url || {};
    url = opts.url;
  }
  if (isFunction(opts)) {
    cb = opts;
    opts = {};
  }
  if (!opts) {
    opts = {};
  }
  opts = objectAssign$1({}, defaultConfig, opts);
  url = url || opts.url;
  cb = cb || noop;
  if (!url || typeof url !== 'string') {
    cb(new Error('Param url is needed!'));
    if (!jsonp$1.promiseClose && canUsePromise) {
      return new Promise(function (resolve, reject) {
        return reject(new Error('Param url is needed!'));
      });
    }
    return;
  }
  var urlWithParams = generateJsonpUrlWithParams(url, opts.params);
  // first get data from store
  var datafromStore = getDataFromStore({
    useStore: opts.useStore,
    storeKey: urlWithParams,
    storeCheck: opts.storeCheck,
    storeCheckKey: opts.storeCheckKey,
    storeSign: opts.storeSign,
    dataCheck: opts.dataCheck
  });
  if (datafromStore) {
    cb(null, datafromStore);
    if (!jsonp$1.promiseClose && canUsePromise) {
      return new Promise(function (resolve) {
        return resolve(datafromStore);
      });
    }
    return;
  }
  opts.originalUrl = urlWithParams;
  if (!jsonp$1.promiseClose && canUsePromise) {
    return new Promise(function (resolve, reject) {
      fetchData(urlWithParams, opts, function (err, data) {
        if (err) {
          cb(err);
          return reject(err);
        }
        cb(null, data);
        resolve(data);
      });
    });
  }
  fetchData(urlWithParams, opts, cb);
}

function generateJsonpUrlWithParams(url, params) {
  params = typeof params === 'string' ? params : serializeParams(params);
  url += (~url.indexOf('?') ? '&' : '?') + ('' + params);
  url = url.replace('?&', '?');
  return url;
}

function fetchData(url, opts, cb) {
  var originalUrl = opts.originalUrl;
  var charset = opts.charset;
  var jsonpUrlQueryParam = getUrlQueryParamByName(url, opts.jsonp);
  var funcId = (jsonpUrlQueryParam === '?' ? false : jsonpUrlQueryParam) || opts.name || '__jsonp' + timestamp++;
  var gotoBackupInfo = arguments[3] || null;
  if (jsonpUrlQueryParam) {
    if (jsonpUrlQueryParam === '?') {
      url = updateQueryStringParamByName(url, opts.jsonp, encodeC(funcId));
    }
  } else {
    url += (url.split('').pop() === '&' ? '' : '&') + (opts.jsonp + '=' + encodeC(funcId));
  }
  if (!opts.cache) {
    url += (url.split('').pop() === '&' ? '' : '&') + ('_=' + new Date().getTime());
  }

  // move prev callback into next when fetch parallel with same funcId
  clearTimeout(win['timer_' + funcId]);
  var prevFunc = win[funcId];
  win[funcId] = function (data) {
    prevFunc && prevFunc(data);
    cleanup(funcId);
    if (gotoBackupInfo) {
      data.__$$backupCall = gotoBackupInfo;
    }
    if (opts.dataCheck) {
      if (opts.dataCheck(data) !== false) {
        // write data to store
        setDataToStore({
          useStore: opts.useStore,
          storeKey: originalUrl,
          data: data
        });
        return cb(null, data);
      }
      if (fallback(originalUrl, opts, cb) === false) {
        cb(new Error('Data check error, and no fallback'));
      }
    } else {
      // write data to store
      setDataToStore({
        useStore: opts.useStore,
        storeKey: originalUrl,
        data: data
      });
      cb(null, data);
    }
  };
  var script = appendScriptTagToHead({
    url: url,
    charset: charset
  });

  var timeout = opts.timeout != null ? opts.timeout : TIMEOUT_CONST;
  // when timeout, will try to retry
  win['timer_' + funcId] = setTimeout(function () {
    cleanup(funcId);
    // no retryTimes left, go to backup
    if (typeof opts.retryTimes === 'number' && opts.retryTimes > 0) {
      opts.retryTimes--;
      return fetchData(originalUrl, opts, cb);
    }
    if (fallback(originalUrl, opts, cb) === false) {
      return cb(new Error('Timeout and no data return'));
    }
  }, timeout);

  function cleanup(funcId) {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
    win[funcId] = noop;
    clearTimeout(win['timer_' + funcId]);
  }
}

function storeCheckFn(storeData, storeCheckKey, storeSign) {
  if (storeData && storeCheckKey && storeSign) {
    return storeData[storeCheckKey] && storeData[storeCheckKey] === storeSign;
  }
  return false;
}

function getDataFromStore(_ref) {
  var useStore = _ref.useStore,
      storeKey = _ref.storeKey,
      storeCheck = _ref.storeCheck,
      storeCheckKey = _ref.storeCheckKey,
      storeSign = _ref.storeSign,
      dataCheck = _ref.dataCheck;

  useStore = useStore ? store.enabled : false;
  if (useStore) {
    var storeData = store.get(storeKey);
    storeCheck = storeCheck || storeCheckFn;
    if (storeCheck(storeData, storeCheckKey, storeSign)) {
      if (!dataCheck || storeData && dataCheck && dataCheck(storeData) !== false) {
        return storeData;
      }
    }
  }
  return null;
}

function getDataFromStoreWithoutCheck(_ref2) {
  var useStore = _ref2.useStore,
      storeKey = _ref2.storeKey,
      dataCheck = _ref2.dataCheck;

  useStore = useStore ? store.enabled : false;
  if (useStore) {
    var storeData = store.get(storeKey);
    if (!dataCheck || storeData && dataCheck && dataCheck(storeData) !== false) {
      return storeData;
    }
  }
  return null;
}

function setDataToStore(_ref3) {
  var useStore = _ref3.useStore,
      storeKey = _ref3.storeKey,
      data = _ref3.data;

  useStore = useStore ? store.enabled : false;
  if (useStore) {
    store.set(storeKey, data);
  }
}

function fallback(url, opts, cb) {
  var backup = opts.backup;
  var backupWithParams = void 0;
  if (backup) {
    if (typeof backup === 'string') {
      delete opts.backup;
      backupWithParams = generateJsonpUrlWithParams(backup, opts.params);
      return fetchData(backupWithParams, opts, cb, {
        backup: backup
      });
    } else if (Array.isArray(backup)) {
      if (backup.length) {
        var backupUrl = backup.shift();
        backupWithParams = generateJsonpUrlWithParams(backupUrl, opts.params);
        return fetchData(backupWithParams, opts, cb, {
          backup: backupUrl
        });
      }
    }
  }
  // no backup to use, try to get data from store
  var dataFromStoreWithoutCheck = getDataFromStoreWithoutCheck({
    useStore: opts.useStore,
    storeKey: url,
    dataCheck: opts.dataCheck
  });
  if (dataFromStoreWithoutCheck) {
    cb(null, dataFromStoreWithoutCheck);
    return true;
  }
  return false;
}

function appendScriptTagToHead(_ref4) {
  var url = _ref4.url,
      charset = _ref4.charset;

  if (!doc) {
    return;
  }
  var script = doc.createElement('script');
  script.type = 'text/javascript';
  if (charset) {
    script.charset = charset;
  }
  script.src = url;
  head.appendChild(script);
  return script;
}

export default jsonp$1;
//# sourceMappingURL=jsonp.esm.js.map
