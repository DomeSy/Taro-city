import { HOMEINIT } from '../constants/home'
import { reduxRquest } from '@unilts'

export const DHomeInit = (appid, interfaceid, payload) => reduxRquest({
  type: HOMEINIT,
  appid,
  interfaceid,
  payload
})


