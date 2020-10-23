// 封装Redux，简化使用
import request from './request';

export default function createAction({ url, payload, method, fetchOptions, cb, type }) {
  return (dispatch) => {
    return request({ url, payload, method, ...fetchOptions }).then((res) => {
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    })
  }
}