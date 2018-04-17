import { combineReducers } from 'redux'
import blackjackReducer from './blackjackReducer'
import pokerReducer from './pokerReducer'
import rouletteReducer from './rouletteReducer'
import userReducer from './userReducer'

export default combineReducers({
  blackjack: blackjackReducer,
  poker: pokerReducer,
  roulette: rouletteReducer,
  user: userReducer
})
