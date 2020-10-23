//用户信息逻辑较多需要单独封装接口
import { USER_INFO, USER_LOGIN, USER_LOGOUT } from '@constants/user'
import { reduxRquest } from '@unilts'


// 获取用户信息
export const dispatchUser = payload => reduxRquest({
  // url: API_USER,
  fetchOptions: {
    showToast: false,
    autoLogin: false
  },
  type: USER_INFO,
  method: 'POST',
  payload
}, 'user')

// export const dispatchUser = payload => {
//   console.log(payload, '--')
// }

// 用户登录
// export const dispatchLogin = payload => reduxRquest({
//   // url: API_USER_LOGIN,
//   type: USER_LOGIN,
//   payload
// })

// // 用户退出登录
// export const dispatchLogout = () => ({ type: USER_LOGOUT })
