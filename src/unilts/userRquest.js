import Taro from '@tarojs/taro'
import jmasRequest from './jmas/jmasRequest'
import { jisConfig, TaroMethod, Method } from './index'

const getCreatesign = async payload => {
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
async function userRquest({ payload = {}, method = 'GET'}) {
  const res = await getCreatesign(payload)
  const { data, msg, retcode } = JSON.parse(Method.RSAdecrypt(res))
  if(retcode !== '000000'){
    TaroMethod.Message(msg)
  }else{
    return JSON.parse(data)
  }
}


export default userRquest