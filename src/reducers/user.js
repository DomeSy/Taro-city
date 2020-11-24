import Taro from '@tarojs/taro'
import { userToken } from '@unilts';
import { USER_LOGIN, USER_LOGOUT } from '@constants/user'

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
      return data
    }
    case USER_LOGOUT: {
      Taro.removeStorageSync(userToken)
      return {
        ...INITIAL_STATE
      }
    }
    default:
      return state
  }
}
