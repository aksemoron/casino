
let defaultState = {game :
  {
    dealer: {},
    player: {},
    deckId: "",
    remaining: "",
    dealt: false
  }
}

export default function managePlayer(state = defaultState, action) {
  switch (action.type) {
    case 'DEAL':
    break
    default:
      return state;

  }
}
