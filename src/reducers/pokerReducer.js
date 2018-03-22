let defaultState = {
  started: false,
  deck_id: "",
  dealt: false,
  playerCards: [],
  draw: false,
  newPlayerCards: [],
  changeBet: true,
  finished: false
}

export default function managePoker(state=defaultState, action) {
  switch(action.type) {
    case 'POKER_START_GAME':
      return {...state, deckId: action.payload.deck_id, started: true, draw: false, finished: false,
              dealt: false, changeBet: true}
    case 'POKER_DEAL_CARDS':
      return {
        ...state, playerCards: action.payload.cards, dealt: true, draw: false, newPlayerCards: [],
        changeBet: false, finished: false,
        }
    case 'ADD_NEW_CARD':
      return {...state, newPlayerCards: [...state.newPlayerCards, action.payload]}
    case 'REMOVE_NEW_CARD':
      let index = state.newPlayerCards.indexOf(action.payload)
      state.newPlayerCards.splice(index, 1)
      return {...state, newPlayerCards: state.newPlayerCards}
    case 'DRAW_CARDS':
      return {
        ...state, newPlayerCards: state.newPlayerCards.concat(action.payload.cards), draw: true,
        finished: true
      }
    case 'PAY_POKER_PLAYER':
      return {...state, changeBet: true}
    case 'RESET_GAMES':
      return {...state, started: false, dealt: false}
    default:
      return state;
  }
}
