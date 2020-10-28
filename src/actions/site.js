import { SITEINIT, SITEGET } from '../constants/site'

export const add = () => {
  return {
    type: SITEINIT
  }
}
export const minus = () => {
  return {
    type: SITEGET
  }
}

