let defaultState = {
  started: false,
  deck_id: "",
  dealt: false,
  playerCards: []
}

export default function managePoker(state=defaultState, action) {
  switch(action.type) {
    case 'POKER_START_GAME':
      return {...state, deckId: action.payload.deck_id, started: true}
    case 'POKER_DEAL_CARDS':
      return {...state, playerCards: action.payload.cards, dealt: true}
    case 'RESET_GAMES':
      return {...state, started: false}
    default:
      return state;
  }
}
