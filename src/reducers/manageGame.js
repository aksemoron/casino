let defaultState =
  {
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
    case 'START_GAME':
      return {...state, deckId: action.payload.deck_id, remaining: action.payload.remaining, stand: false, started: true, dealt: false, giveDealerCards: true}
    case 'DEAL_CARDS':
      if (state.remaining < 6) {
        return {...state, started: false, dealt: false}
      } else {
        return {...state,
          dealer: action.payload.cards.slice(0,1), dealerValue: getValue(action.payload.cards.slice(0,1)),
          player: action.payload.cards.slice(1,3), playerValue: getValue(action.payload.cards.slice(1,3)),
          remaining: action.payload.remaining, dealt: true, stand: false, finished: false, giveDealerCards: true
        }
      }

    case 'CLICK_HIT':
      let newPlayerValue = getValue([...state.player, action.payload.cards[0]])
      if (newPlayerValue >= 21) {
        return {...state,
          player: [...state.player, action.payload.cards[0]], playerValue: newPlayerValue,
          remaining: action.payload.remaining, finished: true, stand: true, giveDealerCards: false
        }
      } else {
        return {...state,
          player: [...state.player, action.payload.cards[0]], playerValue: newPlayerValue,
          remaining: action.payload.remaining
        }
      }
    case 'CLICK_STAND':
      if (state.playerValue === 21) {
        return {...state, stand: true, giveDealerCards: false, finished: true}
      } else {
        return {...state, stand: true}
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
                  remaining: action.payload.remaining, giveDealerCards: false, finished: true}
      }

    default:
      return state;
  }
}
