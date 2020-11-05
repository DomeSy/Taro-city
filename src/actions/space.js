import { DSPACESET, DSPACEINFO } from '../constants/space'
import { reduxRquest } from '@unilts'

export const DSpaceSet = payload => ({type: DSPACESET, payload})

export const DSpaceInfo = payload => reduxRquest({
  type: DSPACEINFO,
  cb: res => ({ ...res, sign: payload.sign}),
  payload
}, 'space')
