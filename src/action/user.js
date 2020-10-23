import { USER_INFO, USER_LOGIN, USER_LOGOUT } from '@constants/user'
import { createAction } from '@utils/redux'

// 获取用户信息
export const dispatchUser = payload => createAction({
  // url: API_USER,
  fetchOptions: {
    showToast: false,
    autoLogin: false
  },
  type: USER_INFO,
  payload
})

// 用户登录
export const dispatchLogin = payload => createAction({
  // url: API_USER_LOGIN,
  type: USER_LOGIN,
  payload
})

// 用户退出登录
export const dispatchLogout = () => ({ type: USER_LOGOUT })
