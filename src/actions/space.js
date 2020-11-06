import { DSPACESET, DSPACEINFO, DSPACEINIT } from '../constants/space'
import { reduxRquest } from '@unilts'

export const DSpaceInit = () => ({type: DSPACEINIT})

export const DSpaceSet = payload => ({type: DSPACESET, payload})

export const DSpaceInfo = payload => reduxRquest({
  type: DSPACEINFO,
  cb: res => ({ ...res, sign: payload.sign}),
  payload
}, 'space')
