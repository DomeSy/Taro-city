import Taro from '@tarojs/taro'

const CODE_SUCCESS = '200'
const local = 'https://app-izz.zhengzhou.gov.cn/jmportalzs/interfaces/'

// 封装请求
async function fetch({url, payload = {}, method = 'GET', path = ''}) {
  const header = { }
  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }

  return new Promise((resolve, reject) => {
    Taro.request({
      url: path ? path : local + url,
      method,
      data: payload,
      header
    }).then(async (res) => {
      const { code, data } = res
      
      if(code !== CODE_SUCCESS){
        Taro.showToast({
          title: res.msg,
          icon: 'none'
        })
        return
      }

      resolve(data)
    }).catch((err) => {
      const defaultMsg = err.code === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常'
      if (showToast) {
        Taro.showToast({
          title: err && err.errorMsg || defaultMsg,
          icon: 'none'
        })
      }
  
      return Promise.reject({ message: defaultMsg, ...err })
    })
  }) 
}

export default fetch