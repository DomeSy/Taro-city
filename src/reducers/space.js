import { DSPACESET, DSPACEINFO } from '../constants/space'
import { Jump } from '@unilts';
import Taro from '@tarojs/taro'

const INITIAL_STATE = {
  space: {
    pension: {} //养老保险
  }
}
export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DSPACESET: {
      const { sign } = action.payload;
      state.space[sign] = { ...state.space[sign], ...action.payload}
      return {
        ...state,
      }
    }
    case DSPACEINFO: {
      const { sign, result } = action.payload;
      if(result){
        Jump({url:'/my', method: 'switchTab'})
        state.space[sign] = { ...state.space[sign], spaceData: action.payload};
      } else {
        Taro.atMessage({
          message: `授权失败！暂未查询到参保信息`,
          type: 'error',
          duration: 2000
        })
      }
      return {
        ...state
      }
    }
    default:
      return state
  }
}
