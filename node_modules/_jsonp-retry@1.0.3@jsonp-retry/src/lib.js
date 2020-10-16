const enc = encodeURIComponent

export function serializeParams (params) {
  if (!params) {
    return ''
  }
  return Object.keys(params)
    .map(item => (`${item}=${enc(params[item])}`)).join('&')
}

export function isFunction (fn) {
  return typeof fn === 'function'
}

export function getUrlQueryParamByName (url, name) {
  if (!url) {
    url = window.location.href
  }
  name = name.replace(/[[]]/g, '\\$&')
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)
  if (!results) {
    return null
  }
  if (!results[2]) {
    return ''
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export function updateQueryStringParamByName (url, name, value) {
  const re = new RegExp('([?&])' + name + '=.*?(&|$)', 'i')
  const separator = url.indexOf('?') !== -1 ? '&' : '?'
  if (url.match(re)) {
    return url.replace(re, '$1' + name + '=' + value + '$2')
  }
  return url + separator + name + '=' + value
}
