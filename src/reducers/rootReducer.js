import { combineReducers } from 'redux'
import blackjackReducer from './blackjackReducer'
import pokerReducer from './pokerReducer'
import userReducer from './userReducer'

export default combineReducers({
  blackjack: blackjackReducer,
  poker: pokerReducer,
  user: userReducer
})
