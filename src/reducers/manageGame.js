let defaultState =
  {game: {
    dealer: [],
    dealerValue: "",
    player: [],
    playerValue: "",
    started: false,
    deckId: "",
    remaining: "",
    dealt: false,
    stand: false,
  }}

export default function managePlayer(state = defaultState, action) {
  switch (action.type) {
    case 'START_GAME':
      debugger
      return {...state, deckId: action.deck_id, remaining: action.remaining, started: true}
    default:
      return state;

  }
}
