import { DSPACESET } from '../constants/space'

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
    default:
      return state
  }
}
