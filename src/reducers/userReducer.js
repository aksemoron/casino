let defaultState = {
  loggedIn: false,
  username: "",
  userId: "",
  bankroll: "",
  leaderBoard: [],
  currentBet: 0,
}

export default function manageUser(state = defaultState, action) {
  switch (action.type) {
    // Login / Users
    case 'HANDLE_LOGIN':
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token)
        return {...state, loggedIn: true, userId: action.payload.user.id, username: action.payload.user.username, bankroll: action.payload.user.bankroll}
      } else {
        return {...state}
      }
    case 'CREATE_USER':
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token)
        return {...state, loggedIn: true, userId: action.payload.userId, username: action.payload.username, bankroll: action.payload.bankroll}
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
      return {...state, loggedIn: false, started: false, username: "", userId: "", bankroll: "", dealt: false }
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
      case 'INCREASE_BANK':
        if (state.double) {
          return {...state, double: false, currentBet: 0, bankroll: (state.bankroll + (3*state.currentBet))}
        } else {
          return {...state, currentBet: 0, bankroll: (state.bankroll + (2*state.currentBet))}
        }
      case 'DECREASE_BANK':
        if (state.double) {
          return {...state, currentBet: 0, double: false, bankroll: (state.bankroll - state.currentBet)}
        } else {
          return {...state, currentBet: 0}
        }
      case 'ADD_MONEY':
        if (state.username === "kenny") {
          return {...state, bankroll: 100000, currentBet: 0}
        } else {
          return {...state, bankroll: 1000, currentBet: 0}
        }

      default:
        return state;
  }
}
