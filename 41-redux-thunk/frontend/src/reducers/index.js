import { combineReducers } from 'redux'
import auth from './auth'
import boardgames from './boardgames'

export default combineReducers({
  auth,
  boardgames
})
