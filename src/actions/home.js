import { HOMEINIT, HOMECLEAR } from '../constants/home'
import { reduxRquest } from '@unilts'

export const DHomeInit = (payload) => reduxRquest({
  type: HOMEINIT,
  payload
}, 'home')

export const DHomeClear = () => ({type: HOMECLEAR})


