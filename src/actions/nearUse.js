import { NEARSET, NEARINIT, SEARCHCLEAR } from '../constants/nearUse'
import { storage } from '@unilts'

export const DNearInit = () => storage({
  type: NEARINIT,
  key: NEARSET
})

export const DNearSet = payload => {
  return {
    type: NEARSET,
    payload
  }
}

export const DSearchClear = () => {
  return {
    type: SEARCHCLEAR,
  }
}

