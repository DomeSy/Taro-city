import { DSHOW } from '../constants/show'
import { reduxRquest } from '@unilts'

export const DShow = payload => reduxRquest({type: DSHOW,appid: payload.appid, interfaceid: payload.interfaceid, payload: payload.payload})


