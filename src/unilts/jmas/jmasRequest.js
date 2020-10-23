import qs from 'qs'
import request from '../request'
import { FROMPORT, SIGNURL, VERSION, GATEWAY, CHARSET } from './jmasApi'

// appid：appid, interfaceid：接口id, payload: 参数
const fetch = (appid, interfaceid, payload) => {
  return new Promise(async (resolve, reject) => {
    const datestr = new Date().valueOf()
    const param = {
      app_id: appid,
      interface_id: interfaceid,
      version: VERSION,
      biz_content: payload,
      charset: CHARSET,
      timestamp: datestr,
      origin: FROMPORT,
    }
    const data = await request({path: SIGNURL, method: 'POST', payload: qs.stringify(param), rule: 'jmas'})
    if (data == null || data == undefined || data == '') {
      reject(false)
    } else {
      const { sign } = data.data;
      const playod = {
        app_id: appid,
        interface_id: interfaceid,
        version: VERSION,
        biz_content: payload,
        charset: CHARSET,
        timestamp: datestr,
        origin: FROMPORT,
        sign,
      }
      const datas = await request({path: GATEWAY, method: 'POST', payload: qs.stringify(playod), rule: 'jmas'})
      if (datas == null || datas == undefined || datas == '') {
        reject(false)
      } else {
        resolve(datas)
      }
    }
  })
}

async function jmasRequest(appid = '', interfaceid = '', payload = {}){
  let data = await fetch(appid, interfaceid, JSON.stringify(payload))
  if (data.code == '200') {
    // if(data.data.substring(0,1) == '"'){
    //   return JSON.parse(data.data.substring(1,data.data.length -1))
    // }else{
    //   return JSON.parse(data.data)
    // }
    return data.data
  }
}

export default jmasRequest;

