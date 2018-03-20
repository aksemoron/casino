let defaultState = {
  changeBet: true,
  double: false,
  togglePlayerBank: true,
  // deal cards
  dealer: [],
  dealerValue: "",
  player: [],
  playerValue: "",
  // start game
  started: false,
  deckId: "",
  remaining: "",
  dealt: false,
  // handle dealer cards
  stand: false,
  finished: false,
  giveDealerCards: true,
  // counting cards
  cardCount: 0,
  cardCounterOn: true,
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

const handleCardCount = (cards) => {
  let count = 0
  let mappedCards = cards.map(card => cardValues[card.value])
  mappedCards.forEach(value => {
    if (value <= 6) {
      count += 1
    } else if (value >= 10) {
      count -= 1
    }
  })
  return count
}

export default function manageBlackjack(state = defaultState, action) {
  switch (action.type) {
    // GAME
    case 'START_GAME':
      return {...state, deckId: action.payload.deck_id, remaining: action.payload.remaining, stand: false, started: true, dealt: false,
        giveDealerCards: true, cardCount: 0}
    case 'DEAL_CARDS':
      if (state.remaining < 6) {
        return {...state, started: false, dealt: false}
      } else if (getValue(action.payload.cards.slice(1,3)) === 21 ){
        return {...state,
          dealer: action.payload.cards.slice(0,1), dealerValue: getValue(action.payload.cards.slice(0,1)),
          player: action.payload.cards.slice(1,3), playerValue: getValue(action.payload.cards.slice(1,3)),
          remaining: action.payload.remaining, dealt: true, stand: true, finished: true, giveDealerCards: false,
          changeBet: true, double: true, togglePlayerBank: true, cardCount: handleCardCount(action.payload.cards)
         }
      } else {
        return {...state,
          dealer: action.payload.cards.slice(0,1), dealerValue: getValue(action.payload.cards.slice(0,1)),
          player: action.payload.cards.slice(1,3), playerValue: getValue(action.payload.cards.slice(1,3)),
          remaining: action.payload.remaining, dealt: true, stand: false, finished: false, giveDealerCards: true,
          changeBet: false, double: false, togglePlayerBank: true, cardCount: handleCardCount(action.payload.cards)
        }
      }
    // GAME ACTIONS
    case 'CLICK_HIT':
      let newPlayerValue = getValue([...state.player, action.payload.cards[0]])
      if (newPlayerValue >= 21) {
        return {...state,
          player: [...state.player, action.payload.cards[0]], playerValue: newPlayerValue,
          remaining: action.payload.remaining, finished: true, stand: true, giveDealerCards: false, changeBet: true,
          cardCount: state.cardCount + handleCardCount(action.payload.cards)
        }
      } else {
        return {...state,
          player: [...state.player, action.payload.cards[0]], playerValue: newPlayerValue,
          remaining: action.payload.remaining, cardCount: state.cardCount + handleCardCount(action.payload.cards)
        }
      }
    case 'CLICK_DOUBLE':
      let newPlayerValueDouble = getValue([...state.player, action.payload.cards[0]])
        if (newPlayerValueDouble >= 21) {
          return {...state,
            player: [...state.player, action.payload.cards[0]], playerValue: newPlayerValueDouble,
            remaining: action.payload.remaining, finished: true, stand: true, giveDealerCards: false, changeBet: true,
            double: true, cardCount: state.cardCount + handleCardCount(action.payload.cards)
          }
        } else {
          return {...state,
            player: [...state.player, action.payload.cards[0]], playerValue: newPlayerValueDouble,
            remaining: action.payload.remaining, finished: true, stand: true, giveDealerCards: true, changeBet: true,
            double: true, cardCount: state.cardCount + handleCardCount(action.payload.cards)
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
          remaining: action.payload.remaining, giveDealerCards: true, cardCount: state.cardCount + handleCardCount(action.payload.cards)
        }
      } else {
        return {...state, dealer: [...state.dealer, action.payload.cards[0]], dealerValue: newDealerValue,
                  remaining: action.payload.remaining, giveDealerCards: false, finished: true,
                  cardCount: state.cardCount + handleCardCount(action.payload.cards)
               }
      }
      // CARD COUNTER
      case 'TOGGLE_CARD_COUNTER':
        return {...state, cardCounterOn: !state.cardCounterOn}
      case 'SETTLE_PLAYER_BANK':
        return {...state, togglePlayerBank: true}
      default:
        return state;
        // UPDATE BANKROLL
      case 'INCREASE_BANK':
        if (state.double) {
          return {...state, double: false, togglePlayerBank: false}
        } else {
          return {...state, togglePlayerBank: false}
        }
      case 'DECREASE_BANK':
        if (state.double) {
          return {...state, togglePlayerBank: false}
        } else {
          return {...state, togglePlayerBank: false}
        }
      case 'ADD_MONEY':
        if (state.username === "kenny") {
          return {...state, togglePlayerBank: false}
        } else {
          return {...state, togglePlayerBank: false}
        }
  }
}
