export const pokerStartGame = () => {

  return function(dispatch) {
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(res => res.json())
    .then(cards => dispatch({
      type: 'POKER_START_GAME',
      payload: cards
    }))
  };
};

export const pokerDealCards = (deckId) => {
  return function(dispatch) {
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
    .then(res=>res.json())
    .then(json => dispatch({
      type: 'POKER_DEAL_CARDS',
      payload: json
    }))
  };
};
