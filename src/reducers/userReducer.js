let defaultState = {
  loggedIn: false,
  username: "",
  userId: "",
  bankroll: 0,
  leaderBoard: [],
  currentBet: 0,
  error: "",
}

export default function manageUser(state = defaultState, action) {
  switch (action.type) {
    // Login / Users
    case 'HANDLE_LOGIN':
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token)
        return {...state, loggedIn: true, userId: action.payload.id, username: action.payload.username, bankroll: action.payload.bankroll}
      } else if (action.payload.error) {
        return {...state, error: action.payload.error}
      } else {
        return {...state}
      }
    case 'CREATE_USER':
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token)
        return {...state, loggedIn: true, userId: action.payload.userId, username: action.payload.username, bankroll: action.payload.bankroll}
      } else if (action.payload.error) {
        return {...state, error: action.payload.error}
      } else {
        return {...state}
      }
    case 'FIND_USER':
      if (action.payload.error) {
        return {...state, loggedIn: false}
      } else {
        return {...state, loggedIn: true, userId: action.payload.id, username: action.payload.username, bankroll: action.payload.bankroll}
      }
    case 'HANDLE_LOGOUT':
      localStorage.removeItem("token")
      return {...state, loggedIn: false, started: false, username: "", userId: "", bankroll: 0, currentBet: 0, dealt: false, error: "" }
    case 'TOP_USERS':
      return {...state, leaderBoard: action.payload }

    case 'INCREASE_BET':
      if (state.bankroll > 0) {
        return {...state, currentBet: state.currentBet + 100, bankroll: state.bankroll - 100}
      } else {
        return {...state}
      }
    case 'DECREASE_BET':
      if (state.currentBet > 0) {
        return {...state, currentBet: state.currentBet - 100, bankroll: state.bankroll + 100}
      } else {
        return {...state}
      }
    case 'BET_ALL_IN':
      return {...state, currentBet: state.currentBet + state.bankroll, bankroll: 0}

    // UPDATE BANKROLL
    case 'CLICK_DOUBLE':
        return {...state, double: true}
    case 'INCREASE_BANK':
      if (state.double) {
        return {...state, double: false, bankroll: (state.bankroll + (2*state.currentBet))}
      } else {
        return {...state, bankroll: state.bankroll + state.currentBet}
      }
    case 'DECREASE_BANK':
      if (state.double) {
        return {...state, currentBet: 0, double: false, bankroll: (state.bankroll - state.currentBet)}
      } else if (state.currentBet > state.bankroll) {
        return {...state, currentBet: state.bankroll, bankroll: 0}
      } else {
        return {...state, currentBet: 0}
      }
    case 'ADD_MONEY':
      return {...state, bankroll: 1000, currentBet: 0}

    // POKER
    case 'PAY_POKER_PLAYER':
      if (action.payload === 0 && state.currentBet > state.bankroll) {
        return {...state, currentBet: state.bankroll, bankroll: 0}
      } else {
        return {...state, bankroll: state.bankroll + (state.currentBet * action.payload - state.currentBet)}
      }
    // Both
    case 'RESET_GAMES':
      return {...state, started: false, dealt: false, currentBet: 0,}
    default:
      return state;
  }
}
