//用户信息逻辑较多需要单独封装接口
import Taro from '@tarojs/taro'
import { USER_INFO, USER_LOGIN, USER_LOGOUT } from '@constants/user'
import { reduxRquest, storage } from '@unilts'



// 获取用户信息
export const dispatchUser = () => storage({
  type: USER_INFO,
  key: USER_LOGIN
})

// 用户登录
export const dispatchLogin = payload => reduxRquest({
  // url: API_USER,
  type: USER_LOGIN,
  method: 'POST',
  cb: res => ({ ...res, token: payload.token, usertype: payload.usertype }),
  payload
}, 'user')


// 用户登录
// export const dispatchLogin = payload => reduxRquest({
//   // url: API_USER_LOGIN,
//   type: USER_LOGIN,
//   payload
// })

// // 用户退出登录
// export const dispatchLogout = () => ({ type: USER_LOGOUT })
