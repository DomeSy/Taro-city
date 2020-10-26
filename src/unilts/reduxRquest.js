// 封装Redux，简化使用
import request from './request'
import userRquest from './userRquest'
import jmasRequest from './jmas/jmasRequest'

/*
  way: 
    user:用户
    request: 普通请求
    jams： jmas接口请求（默认）

  url: 部分地址
  path：完整地址
  payload：参数
  method: 方式
  fetchOptions： 其余操作
  cb：增加原有返回上的数据
  type：类型
*/
export default function createAction({ url, path, payload, method, fetchOptions, cb, type }, way = 'jmas') {
  return async (dispatch) => {
    if(way === 'user') {
      const res = await userRquest({ payload, method });
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    } else if(war == 'request'){
      const res = await request({ url, path, payload, method, ...fetchOptions });
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    } else {
      const res = await jmasRequest({ url, path, payload, method, ...fetchOptions });
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    }
  }
}