export const startGame = () => {
  return function(dispatch) {
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8`)
    .then(res => res.json())
    .then(cards => dispatch({
      type: 'START_GAME',
      payload: cards
    }))
  };
};

export const dealCards = (deckId) => {
  return function(dispatch) {
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`)
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

export const clickDouble = (deckId) => {
  return function(dispatch) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(res=>res.json())
    .then(json => dispatch({
      type: 'CLICK_DOUBLE',
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

export const handleLogin = (username, password) => {
  return function(dispatch) {
    return fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(res => res.json())
    .then(json => dispatch({
      type: 'HANDLE_LOGIN',
      payload: json
    }))
  }
}

export const createUser = (username, password) => {
  return function(dispatch) {
    return fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(res => res.json())
    .then(json => dispatch({
      type: 'CREATE_USER',
      payload: json
    }))
  }
}

export const findUser = (token) => {
  return function(dispatch) {
    return fetch('http://localhost:3000/current_user', {
      method: "POST",
      headers: {"Authorization": token },
    }).then(res => res.json())
    .then(json => dispatch({
      type: 'FIND_USER',
      payload: json
    }))
  }
}

export const topUsers = () => {
  return function(dispatch) {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(json => dispatch({
      type: 'TOP_USERS',
      payload: json
    }))
  }
}


export const handleLogout = () => {
  return {type: 'HANDLE_LOGOUT'}
}

export const increaseBet = () => {
  return {type: 'INCREASE_BET'}
}

export const decreaseBet = () => {
  return {type: 'DECREASE_BET'}
}

export const increaseBank = () => {
  return {type: 'INCREASE_BANK'}
}

export const decreaseBank = () => {
  return {type: 'DECREASE_BANK'}
}

export const addMoney = () => {
  return {type: 'ADD_MONEY'}
}

export const betAllIn = () => {
  return {type: 'BET_ALL_IN'}
}

export const settlePlayerBank = () => {
  return {type: 'SETTLE_PLAYER_BANK'}
}

export const toggleCardCounter = () => {
  return {type: 'TOGGLE_CARD_COUNTER'}
}
