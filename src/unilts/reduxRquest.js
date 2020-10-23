// 封装Redux，简化使用
import request from './request'
import userRquest from './userRquest'

export default function createAction({ url, path, payload, method, fetchOptions, cb, type }, way) {
  return (dispatch) => {
    if(way === 'user') {
      return userRquest({ payload, method }).then((res) => {

        return res
      })
    } else {
      return request({ url, path, payload, method, ...fetchOptions }).then((res) => {
        dispatch({ type, payload: cb ? cb(res) : res })
        return res
      })
    }
  }
}