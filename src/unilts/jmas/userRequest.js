import jmasRequest from './jmasRequest'
import { jisConfig, Method } from '../index'
import Taro from '@tarojs/taro'

const getCreatesign = payload => {
  const { token, usertype } = payload
  const servicename = usertype == 1 ? 'findOutsideUserByToken' : 'findCorUserByToken'
  const interfaceId = usertype == 1 ? 'findoutsideuserbytoken' : 'findcoruserytoken'
  const datas = {
    app_id: jisConfig.appmark,
    servicename,
    params: {
      token
    }
  }
  return jmasRequest(jisConfig.appmark, interfaceId, datas, 'user')
}

// 封装请求
async function userRquest({ payload = {}}) {
  const res = await getCreatesign(payload)
  const resRSA = await Method.RSAdecrypt(res)
  // const resRSAData = JSON.parse(JSON.parse(resRSA));
  const resRSAData = JSON.parse(resRSA);
  const { data, msg, retcode } = resRSAData

  if(retcode !== '000000'){
    // 如果请求失败说明token失效，则清楚token缓存
    console.error(msg)
    Taro.removeStorageSync('token')
    return false
  }else{
    return JSON.parse(data)
  }
}


export default userRquest