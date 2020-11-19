import { DSHOW } from '../constants/show'

const INITIAL_STATE = {
  show: {
    isSHow:false
  }
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DSHOW: {
      console.log(action, '---')
      return {
        show: {
        }
      }
    }
    default:
      return state
  }
}
