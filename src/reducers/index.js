import { combineReducers } from 'redux'
import user from './user'
import site from './site'
import home from './home'

export default combineReducers({
  user,
  site,
  home
})
