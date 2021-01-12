//用户信息逻辑较多需要单独封装接口
import Taro from '@tarojs/taro'
import { USER_LOGIN, USER_LOGOUT  } from '@constants/user'
import { reduxRquest } from '@unilts'

// 用户登录
export const dispatchLogin = payload => reduxRquest({
  type: USER_LOGIN,
  method: 'POST',
  cb: res => ({ ...res, token: payload.token, usertype: payload.usertype }),
  payload
}, 'user')

// 快登
export const dispatchQuickLogin = () => reduxRquest({
  type: USER_LOGIN,
  method: 'POST'
}, 'quickLogin')


// 用户退出登录
export const dispatchLogout = () => ({ type: USER_LOGOUT })
