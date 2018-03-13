export const startGame = () => {
  return function(dispatch) {
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(res => res.json())
    .then(cards => dispatch({
      type: 'START_GAME',
      payload: cards
    }))
  };
};

export const dealCards = (deckId) => {
  return function(dispatch) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`)
    .then(res=>res.json())
    .then(json => dispatch({
      type: 'DEAL_CARDS',
      payload: json
    }))
  };
};

export const clickHit = (deckId) => {
  return function(dispatch) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(res=>res.json())
    .then(json => dispatch({
      type: 'CLICK_HIT',
      payload: json
    }))
  }
}

export const clickStand = () => {
  return {type: 'CLICK_STAND'}
}

export const dealToDealer = (deckId) => {
  return function(dispatch) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(res=>res.json())
    .then(json => dispatch({
      type: 'DEAL_TO_DEALER',
      payload: json
    }))
  }
}
