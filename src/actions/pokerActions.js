import api from '../url'

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

export const drawCards = (deckId, count) => {
  return function(dispatch) {
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`)
    .then(res=>res.json())
    .then(json => dispatch({
      type: 'DRAW_CARDS',
      payload: json
    }))
  };
};

export const shuffleCards = (deckId) => {
  return function(dispatch) {
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
    .then(res=>res.json())
    .then(json => dispatch({
      type: 'SHUFFLE_CARDS',
      payload: json
    }))
  };
};

export const topUsers = () => {
  return function(dispatch) {
    fetch(`${api}users`)
    .then(res => res.json())
    .then(json => dispatch({
      type: 'TOP_USERS',
      payload: json
    }))
  }
}

export const addNewCard = (card) => {
  return{
    type:'ADD_NEW_CARD',
    payload: card
  }
};

export const removeNewCard = (card) => {
  return{
    type:'REMOVE_NEW_CARD',
    payload: card
  }
};

export const payPokerPlayer = (rank) => {
  return{
    type:'PAY_POKER_PLAYER',
    payload: rank
  }
};
