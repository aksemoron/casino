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
      let tempCards = [...state.newPlayerCards]
      let index = tempCards.indexOf(action.payload)
      tempCards.splice(index, 1)
      return {...state, newPlayerCards: tempCards}
    case 'DRAW_CARDS':
      return {
        ...state, newPlayerCards: state.newPlayerCards.concat(action.payload.cards), draw: true,
        finished: true
      }
    case 'PAY_POKER_PLAYER':
      return {...state, changeBet: true}
      
    // RESET GAMES
    case 'HANDLE_LOGOUT':
      localStorage.removeItem("token")
      return {...state, loggedIn: false, started: false, dealt: false}
    case 'RESET_GAMES':
      return {...state, started: false, dealt: false}
    default:
      return state;
  }
}
