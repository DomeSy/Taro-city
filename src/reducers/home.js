import Taro from '@tarojs/taro'
import { HOMEINIT } from '../constants/home'

const INITIAL_STATE = {
  home: {

  }
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case HOMEINIT: {
      console.log(action, '00098')
      return {
        home: {
          ...action.payload
        }
      }
    }
    default:
      return state
  }
}
