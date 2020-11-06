import { DSPACESET, DSPACEINFO, DSPACEINIT, DSPACEEYES, DSPACECANCEL } from '../constants/space'
import { Jump } from '@unilts';
import Taro from '@tarojs/taro'

const INITIAL_STATE = {
  space: {
    pension: {}, //养老保险
    // spaceAll: [] //我的空间所有的集合
  }
}
export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DSPACEINIT: {
      return state
    }
    case DSPACESET: {
      const { sign } = action.payload;
      state.space[sign] = { ...state.space[sign], ...action.payload}
      return {
        ...state
      }
    }
    case DSPACEINFO: {
      const { result } = action.payload;
      if(result){
        Jump({url:'/my', method: 'switchTab'})
        const list = state.space.spaceAll ? state.space.spaceAll : []
        return {
          space: {
            ...state,
            spaceAll: [{...action.payload}, ...list]
          }
        }
      } else {
        Taro.atMessage({
          message: `授权失败！暂未查询到参保信息`,
          type: 'error',
          duration: 2000
        })
        return {
          ...state
        }
      }
    }
    case DSPACEEYES: {
      let data = state;
      data.space.spaceAll.map(item => {
        item.Dopen = !item.Dopen
      })
      data = JSON.parse(JSON.stringify(data))
      return {
        ...data
      }
    }
    case DSPACECANCEL: {
      let data = state;
      const list = data.space.spaceAll.filter(item => item.Dsign !== action.payload.sign);
      data.space.spaceAll = list;
      data = JSON.parse(JSON.stringify(data));
      return {
        ...data
      }
    }
    default:
      return state
  }
}
