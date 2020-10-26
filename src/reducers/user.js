import { USER_INFO, USER_LOGIN, USER_LOGOUT } from '@constants/user'

const INITIAL_STATE = {
  login: false,
  userInfo: {}
}

export default function user(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_INFO: {
      return {
        ...state,
        login: true,
        userInfo: {
          ...action.payload,
        }
      }
    }
    case USER_LOGIN: {
      return { ...state }
    }
    case USER_LOGOUT: {
      return {
        ...INITIAL_STATE
      }
    }
    default:
      return state
  }
}
