import { combineReducers } from 'redux'
import user from './user'
import counter from './counter'


export default combineReducers({
  user,
  counter
})
