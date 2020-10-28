import { SITEINIT, SITESET } from '../constants/site'
import { storage } from '@unilts'

export const DSiteInit = () => storage({
  type: SITEINIT,
  key: SITESET
})

export const DSiteSet = payload => {
  return {
    type: SITESET,
    payload
  }
}

