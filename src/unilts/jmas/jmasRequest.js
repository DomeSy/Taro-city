import qs from 'qs'
import request from '../request'
import { FROMPORT, SIGNURL, VERSION, GATEWAY, USERGATEWAY, USERSIGNURL, CHARSET } from './jmasApi'

// appid：appid, interfaceid：接口id, payload: 参数,loading
const fetch = (appid, interfaceid, payload, way, loading) => {
  let imageFile = []
  if(way === "imageFile"){
    const data = JSON.parse(payload);
    imageFile = data.imageFile;
    payload = JSON.stringify(data.payload);
  }
  
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
      let playod = {}
      if (way === "imageFile") {
        playod = {
          app_id: appid,
          interface_id: interfaceid,
          version: VERSION,
          biz_content: payload,
          charset: CHARSET,
          timestamp: datestr,
          origin: FROMPORT,
          sign,
          imageFile1: imageFile[0] ?  imageFile[0].url : '',
          imageFile2: imageFile[1] ?  imageFile[1].url : '',
          imageFile3: imageFile[2] ?  imageFile[2].url : '',
          imageFile4: imageFile[3] ?  imageFile[3].url : ''
        }
      } else {
        playod = {
          app_id: appid,
          interface_id: interfaceid,
          version: VERSION,
          biz_content: payload,
          charset: CHARSET,
          timestamp: datestr,
          origin: FROMPORT,
          sign,
        }
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

