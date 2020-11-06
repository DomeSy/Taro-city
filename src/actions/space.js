import { DSPACESET, DSPACEINFO, DSPACEINIT, DSPACEEYES } from '../constants/space'
import { reduxRquest } from '@unilts'

export const DSpaceInit = () => ({type: DSPACEINIT})

export const DSpaceSet = payload => ({type: DSPACESET, payload})

export const DSpaceEyes = payload => ({type: DSPACEEYES, payload})

export const DSpaceInfo = payload => reduxRquest({
  type: DSPACEINFO,
  cb: res => ({ ...res, Dsign: payload.sign, Darea: payload.area}),
  payload
}, 'space')