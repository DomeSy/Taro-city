import Taro from '@tarojs/taro'
import jmasRequest from './jmasRequest'
import { jisConfig, info } from '../index'

const quickLogin = payload => {
  return jmasRequest('xcxkjdl', 'alipayauthforxcx', payload)
}

const getAuthCode = () => {
  return new Promise(res => {
    my.getAuthCode({
      scopes: ['auth_user'],
      complete: (data) => {
        res(data.authCode)
      }
    });
  })
}

// 封装请求
async function quickLoginRequest() {
  if(Taro.getEnv() !== 'ALIPAY'){
    Taro.showToast({
      title: '目前只允许支付宝进入',
      icon: 'none'
    })
    return
  }
  const auth_code = await getAuthCode();
  const res = await quickLogin({auth_code, appmark: jisConfig.appmark})
  Taro.setStorage({
    key: info,
    data: {
      token: res.token,
      usertype: 1,
    }
  });
  return res
}


export default quickLoginRequest