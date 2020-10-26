import Taro from '@tarojs/taro'
import { USER_INFO, USER_LOGIN, USER_LOGOUT } from '@constants/user'
import { TaroMethod } from '@unilts'

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
        console.log(USER_LOGIN, '存储成功')
        Taro.setStorageSync(USER_LOGIN, data)
      } catch (e) { 
        TaroMethod.Message('存储失败')
      }
      return data
    }
    case USER_INFO: {
      // console.log(action, '008')
      return { 
        ...state,
        ...action.payload
      }
    }
    // case USER_LOGOUT: {
    //   return {
    //     ...INITIAL_STATE
    //   }
    // }
    default:
      return state
  }
}
