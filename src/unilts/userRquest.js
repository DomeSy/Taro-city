import Taro from '@tarojs/taro'
import jmasRequest from './jmas/jmasRequest'
import { jisConfig } from './index'
import Method from './method'


const getCreatesign = async payload => {
  const { token } = payload
  const datas = {
    app_id: jisConfig.appmark,
    servicename: 'findOutsideUserByToken',
    params: {
      token
    }
  }
  return jmasRequest(jisConfig.appmark, 'findoutsideuserbytoken', datas, 'user')
}

// 封装请求
async function userRquest({ payload = {}, method = 'GET'}) {
  const res = await getCreatesign(payload)
  const { data, msg, retcode } = JSON.parse(Method.RSAdecrypt(res))
  if(retcode !== '000000'){
    Method.Message(msg)
  }else{
    return JSON.parse(data)
  }
}


export default userRquest