// 封装Redux，简化使用
import request from './request'
import userRequest from './jmas/userRequest'
import homeRequest from './jmas/homeRequest'
import spaceRequest from './jmas/spaceRequest'
import jmasRequest from './jmas/jmasRequest'
import { USER_LOGOUT } from '@constants/user'


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
      const res = await userRequest({ payload });
      // 如果返回的是false，则需要走登录失败的方法
      res ? dispatch({ type, payload: cb ? cb(res) : res }) : dispatch({type: USER_LOGOUT})
      return res
    } else if(way === 'home') {
      const res = await homeRequest({ payload });
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    } else if(way === 'space') {
      const res = await spaceRequest({ payload });
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
        Taro.showModal({
          title: '提示',
          content: message,
          showCancel: false,
          success: (res) => {
          }
        })
      }
    }
  }
}