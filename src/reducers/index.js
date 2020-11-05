import { combineReducers } from 'redux'
import user from './user'
import site from './site'
import home from './home'
import detail from './detail'
import search from './search'
import nearUse from './nearUse'
import space from './space'

export default combineReducers({
  user,
  site,
  home,
  detail,
  search,
  nearUse,
  space
})
