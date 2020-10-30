import jmasRequest from './jmasRequest'
import { jisConfig, Method } from '../index'

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
  const { data, msg, retcode } = JSON.parse(Method.RSAdecrypt(res))
  if(retcode !== '000000'){
    console.error(msg)
  }else{
    return JSON.parse(data)
  }
}


export default userRquest