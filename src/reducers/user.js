import Taro from '@tarojs/taro'
import { USER_INFO, USER_LOGIN, USER_LOGOUT } from '@constants/user'

const INITIAL_STATE = {
  login: false,
  userInfo: {}
}

// Taro.removeStorageSync(USER_LOGIN)

export default function user(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_LOGIN: {
      const data = {
        ...state,
        login: true,
        userInfo: {
          ...action.payload,
        }
      }
      try {
        Taro.setStorageSync(USER_LOGIN, data)
      } catch (e) { 
        console.error('存储失败')
      }
      return data
    }
    case USER_INFO: {
      return { 
        ...state,
        ...action.payload
      }
    }
    case USER_LOGOUT: {
      try {
        Taro.removeStorage(USER_LOGIN)
      } catch (e) { 
        console.error('退出失败')
      }
      return {
        ...INITIAL_STATE
      }
    }
    default:
      return state
  }
}
