// 封装Redux，简化使用
import request from './Request'
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
  appid: Jmas的
  interfaceid, Jmas的
  wayJmas, Jmas的
*/
export default function createAction({ appid, interfaceid, wayJmas, url, path, payload, method, fetchOptions, cb, type }, way = 'jmas') {
  return async (dispatch) => {
    if(way === 'user') {
      const res = await userRquest({ payload });
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    } else if(way == 'request'){
      const res = await request({ url, path, payload, method, ...fetchOptions });
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    } else {
      const res = await jmasRequest( appid, interfaceid, payload, wayJmas);
      const { success, message, data } = res;
      if(success){
        dispatch({ type, payload: cb ? cb(data) : data })
        return data
      }else{
        console.log(message)
      }
    }
  }
}