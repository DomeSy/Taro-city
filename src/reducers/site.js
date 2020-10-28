import { SITEINIT, SITEGET } from '../constants/site'
import { site } from '@unilts/site'

const INITIAL_STATE = {
  site: {
    area: site[0].area,
    siteid: site[0].siteid
  }
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SITEINIT:
      return {
        ...state,
        num: state.num + 1
      }
     case SITEGET:
       return {
         ...state,
         num: state.num - 1
       }
     default:
       return state
  }
}
