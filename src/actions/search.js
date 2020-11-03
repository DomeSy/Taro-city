import { SEARCHSET, SEARCHINIT, SEARCHGET } from '../constants/search'
import { storage } from '@unilts'

export const DSearchInit = () => storage({
  type: SEARCHINIT,
  key: SEARCHSET
})

export const DSearchSet = payload => {
  return {
    type: SEARCHSET,
    payload
  }
}

export const DSearchGet = payload => {
  return {
    type: SITESET,
    payload
  }
}

