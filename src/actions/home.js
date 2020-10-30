import { HOMEINIT } from '../constants/home'
import { reduxRquest } from '@unilts'

export const DHomeInit = (payload) => reduxRquest({
  type: HOMEINIT,
  payload
}, 'home')


