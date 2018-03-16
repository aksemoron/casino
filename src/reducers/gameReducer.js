let defaultState =
  {
    loggedIn: false,
    username: "",
    userId: "",
    bankroll: "",
    currentBet: 0,
    changeBet: true,
    double: false,
    settlePlayerBank: true,

    dealer: [],
    dealerValue: "",
    player: [],
    playerValue: "",
    started: false,
    deckId: "",
    remaining: "",
    dealt: false,
    stand: false,
    finished: false,
    giveDealerCards: true
  }

  const cardValues = { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8,
                 '9': 9, '10': 10, 'JACK': 10, 'QUEEN': 10, 'KING': 10, 'ACE': 11}

  const getValue = (cards) =>{
    let count = 0
    let mappedCards = cards.map(card => card.value)
    cards.forEach(card => {count += cardValues[card.value]})
    if (mappedCards.includes("ACE") && count > 21) {
      count -= (10 * mappedCards.filter(card => {return card === "ACE"}).length)
    }
    return count
  }

export default function managePlayer(state = defaultState, action) {
  switch (action.type) {
    // Login
    case 'HANDLE_LOGIN':
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token)
        return {...state, loggedIn: true, userId: action.payload.user.id, username: action.payload.user.username, bankroll: action.payload.user.bankroll}
      }
      break;
    case 'CREATE_USER':
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token)
        return {...state, loggedIn: true, userId: action.payload.userId, username: action.payload.username, bankroll: action.payload.bankroll}
      }
      break;
    case 'FIND_USER':
      if (action.payload.error) {
        return {...state, loggedIn: false}
      } else {
        return {...state, loggedIn: true, userId: action.payload.id, username: action.payload.username, bankroll: action.payload.bankroll}
      }
    case 'HANDLE_LOGOUT':
      localStorage.removeItem("token")
      return {...state, loggedIn: false, started: false, username: "", userId: "", bankroll: "", dealt: false }

    // INCREMENT BET
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

    // UPDATE BANKROLL
    case 'INCREASE_BANK':
      if (state.double) {
        return {...state, double: false, currentBet: 0, bankroll: (state.bankroll + (3*state.currentBet)), settlePlayerBank: false}
      } else {
        return {...state, currentBet: 0, bankroll: (state.bankroll + (2*state.currentBet)), settlePlayerBank: false}
      }
    case 'DECREASE_BANK':
      if (state.double) {
        return {...state, currentBet: 0, double: false, bankroll: (state.bankroll - state.currentBet), settlePlayerBank: false}
      } else {
        return {...state, currentBet: 0, settlePlayerBank: false}
      }
    case 'ADD_MONEY':
        return {...state, bankroll: 1000, currentBet: 0, settlePlayerBank: false}


    // GAME
    case 'START_GAME':
      return {...state, deckId: action.payload.deck_id, remaining: action.payload.remaining, stand: false, started: true, dealt: false, giveDealerCards: true}
    case 'DEAL_CARDS':
      if (state.remaining < 6) {
        return {...state, started: false, dealt: false}
      } else if (getValue(action.payload.cards.slice(1,3)) === 21 ){
        return {...state,
          dealer: action.payload.cards.slice(0,1), dealerValue: getValue(action.payload.cards.slice(0,1)),
          player: action.payload.cards.slice(1,3), playerValue: getValue(action.payload.cards.slice(1,3)),
          remaining: action.payload.remaining, dealt: true, stand: true, finished: true, giveDealerCards: false,
          changeBet: true, double: true, settlePlayerBank: true
         }
      } else {
        return {...state,
          dealer: action.payload.cards.slice(0,1), dealerValue: getValue(action.payload.cards.slice(0,1)),
          player: action.payload.cards.slice(1,3), playerValue: getValue(action.payload.cards.slice(1,3)),
          remaining: action.payload.remaining, dealt: true, stand: false, finished: false, giveDealerCards: true,
          changeBet: false, double: false, settlePlayerBank: true
        }
      }
    // GAME ACTIONS
    case 'CLICK_HIT':
      let newPlayerValue = getValue([...state.player, action.payload.cards[0]])
      if (newPlayerValue >= 21) {
        return {...state,
          player: [...state.player, action.payload.cards[0]], playerValue: newPlayerValue,
          remaining: action.payload.remaining, finished: true, stand: true, giveDealerCards: false, changeBet: true
        }
      } else {
        return {...state,
          player: [...state.player, action.payload.cards[0]], playerValue: newPlayerValue,
          remaining: action.payload.remaining
        }
      }
    case 'CLICK_DOUBLE':
      let newPlayerValueDouble = getValue([...state.player, action.payload.cards[0]])
        if (newPlayerValueDouble >= 21) {
          return {...state,
            player: [...state.player, action.payload.cards[0]], playerValue: newPlayerValueDouble,
            remaining: action.payload.remaining, finished: true, stand: true, giveDealerCards: false, changeBet: true,
            double: true
          }
        } else {
          return {...state,
            player: [...state.player, action.payload.cards[0]], playerValue: newPlayerValueDouble,
            remaining: action.payload.remaining, finished: true, stand: true, giveDealerCards: true, changeBet: true,
            double: true
          }
        }

    case 'CLICK_STAND':
      if (state.playerValue === 21) {
        return {...state, stand: true, giveDealerCards: false, finished: true}
      } else {
        return {...state, stand: true, changeBet: true}
      }
    case 'DEAL_TO_DEALER':
      let newDealerValue = getValue([...state.dealer, action.payload.cards[0]])
      if(newDealerValue < 17 && state.playerValue <= 21) {
        return {...state,
          dealer: [...state.dealer, action.payload.cards[0]], dealerValue: newDealerValue,
          remaining: action.payload.remaining, giveDealerCards: true
        }
      } else {
        return {...state, dealer: [...state.dealer, action.payload.cards[0]], dealerValue: newDealerValue,
                  remaining: action.payload.remaining, giveDealerCards: false, finished: true
               }
      }
    default:
      return state;
  }
}
