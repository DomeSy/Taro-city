import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Jump } from '@unilts'

const CODE_SUCCESS = '200'
const local = 'https://app-izz.zhengzhou.gov.cn/jmportalzs/interfaces/'

// 封装请求
async function Request({url, payload = {}, method = 'GET', path = '', rule, loading = false}) {
  const header = {}
  
  if(rule === 'jmas'){
    header['content-type'] = 'application/x-www-form-urlencoded'
  } else if (method === 'POST' && Taro.getEnv() !== 'WEB') {
    header['content-type'] = 'application/json'
  }

 
  return new Promise((resolve, reject) => {
    if(loading){
      Taro.showLoading({
        title: '加载中....'
      })
    }
    Taro.request({
      url: path ? path : local + url,
      method,
      data: payload,
      header
    }).then(async (res) => {      
      if(loading){
        Taro.hideLoading()
      }
      const { statusCode, data } = res
      
      if(statusCode !== CODE_SUCCESS && statusCode !== Number(CODE_SUCCESS)){
        Taro.showToast({
          title: res.msg || '接口异常',
          icon: 'none'
        })
        return
      }
      resolve(data)
    }).catch((err) => {
      // 接口异常是获取从那个页面的地址，用于刷新页面
      const { path } = getCurrentInstance().router;
      const defaultMsg = '请求异常'
      // Taro.showToast({
      //   title: err && err.errorMsg || defaultMsg,
      //   icon: 'none'
      // })
      Jump({url: '/catch', method: 'reLaunch', payload: { catchPath: path }})
      return Promise.reject({ message: defaultMsg, ...err })
    })
  }) 
}

export default Request