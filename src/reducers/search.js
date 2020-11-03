import Taro from '@tarojs/taro'
import { SEARCHSET, SEARCHINIT, SEARCHCLEAR } from '../constants/search'

// 主页搜索记录
const INITIAL_STATE = {
  search: []
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCHINIT: {
      console.log(action, '002')
      
      return action.payload ? {
        search: action.payload
      } : state 
    }
    case SEARCHSET: {
      try {
        console.log(JSON.parse(JSON.stringify(action.payload)) , '---')
        Taro.setStorageSync(SEARCHSET, action.payload)
      } catch (e) { 
        console.error('存储失败')
      }
      return {
        search: [...action.payload]
      }
    }
    case SEARCHCLEAR: {
      try {
        Taro.removeStorageSync(SEARCHSET)
      } catch (e) {
        console.error('移除失败')
      }
      console.log(state)
      return INITIAL_STATE
    }
    default:
      return state
  }
}
