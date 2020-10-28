import Taro from '@tarojs/taro'
import { SITEINIT, SITESET } from '../constants/site'
import { site } from '@unilts/site'

const INITIAL_STATE = {
  site: {
    area: site[0].area,
    siteid: site[0].siteid
  }
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SITEINIT: {
      return action.payload ? {
        site: action.payload
      } : INITIAL_STATE 
    }
    case SITESET: {
      try {
        Taro.setStorageSync(SITESET, action.payload)
      } catch (e) { 
        console.error('存储失败')
      }
      return {
        ...action.payload
      }
    }
    default:
      return state
  }
}
