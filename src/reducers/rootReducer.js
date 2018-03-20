import { combineReducers } from 'redux'
import blackjackReducer from './blackjackReducer'
import userReducer from './userReducer'

export default combineReducers({
  blackjack: blackjackReducer,
  user: userReducer
})
