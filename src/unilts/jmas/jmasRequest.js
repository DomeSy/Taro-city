import qs from 'qs'
import request from '../Request'
import { FROMPORT, SIGNURL, VERSION, GATEWAY, USERGATEWAY, USERSIGNURL, CHARSET } from './jmasApi'

// appid：appid, interfaceid：接口id, payload: 参数,loading
const fetch = (appid, interfaceid, payload, way, loading) => {
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
    const path = way === 'user' ? USERSIGNURL : SIGNURL;
    const data = await request({path, method: 'POST', payload: qs.stringify(param), rule: 'jmas', loading})
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
      const path = way === 'user' ? USERGATEWAY : GATEWAY;
      const datas = await request({path, method: 'POST', payload: qs.stringify(playod), rule: 'jmas', loading})
      if (datas == null || datas == undefined || datas == '') {
        reject(false)
      } else {
        resolve(datas)
      }
    }
  })
}

async function jmasRequest(appid = '', interfaceid = '', payload = {}, way, loading = false){
  let res = await fetch(appid, interfaceid, JSON.stringify(payload), way, loading)
  if (res.code == '200' ) {
    if (way === 'user') {
      return res.data
    } else if (res.data.substring(0,1) == '"') {
      return JSON.parse(res.data.substring(1,data.data.length -1))
    } else {
      return JSON.parse(res.data)
    }
  }
}

export default jmasRequest;

