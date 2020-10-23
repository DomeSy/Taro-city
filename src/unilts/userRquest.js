import Taro from '@tarojs/taro'
import jmasRequest from './jmas/jmasRequest'
import { jisConfig } from './index'


const getCreatesign = async payload => {
  const { token } = payload
  const datas = {
    app_id: jisConfig.appmark,
    servicename: 'findOutsideUserByToken',
    params: {
      token
    }
  }
  return jmasRequest(jisConfig.appmark, 'findoutsideuserbytoken', datas)
}

// 封装请求
async function userRquest({ payload = {}, method = 'GET'}) {

  const data = await getCreatesign(payload)
  console.log(data, '--9')
 
}

export default userRquest