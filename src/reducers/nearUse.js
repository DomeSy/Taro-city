import Taro from '@tarojs/taro'
import { NEARSET, NEARINIT, NEARCLEAR } from '../constants/nearUse'

// 主页搜索记录
const INITIAL_STATE = {
  nearUse: []
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEARINIT: {
      return action.payload ? {
        nearUse: action.payload
      } : state 
    }
    case NEARSET: {
      try {
        Taro.setStorageSync(NEARSET, action.payload)
      } catch (e) { 
        console.error('存储失败')
      }
      return {
        nearUse: [...action.payload]
      }
    }
    case NEARCLEAR: {
      try {
        Taro.removeStorageSync(NEARSET)
      } catch (e) {
        console.error('移除失败')
      }
      return INITIAL_STATE
    }
    default:
      return state
  }
}
