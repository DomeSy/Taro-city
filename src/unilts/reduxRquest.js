// 封装Redux，简化使用
import request from './request'
import userRquest from './userRquest'
import jmasRequest from './jmas/jmasRequest'

/*
  way: 
    user:用户
    request: 普通请求
    jams： jmas接口请求（默认）
*/
export default function createAction({ url, path, payload, method, fetchOptions, cb, type }, way = 'jmas') {
  return (dispatch) => {
    if(way === 'user') {
      return userRquest({ payload, method }).then((res) => {
        return res
      })
    } else if(war == 'request'){
      return request({ url, path, payload, method, ...fetchOptions }).then((res) => {
        dispatch({ type, payload: cb ? cb(res) : res })
        return res
      })
    } else {
      return jmasRequest({ url, path, payload, method, ...fetchOptions }).then((res) => {
        dispatch({ type, payload: cb ? cb(res) : res })
        return res
      })
    }
  }
}