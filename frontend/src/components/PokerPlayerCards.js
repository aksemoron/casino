import React from 'react'
import {connect} from 'react-redux'
import { drawCards, shuffleCards, pokerDealCards, payPokerPlayer, topUsers } from '../actions/pokerActions'
import { betAllIn } from '../actions/blackjackActions'
import PokerCardImage from './PokerCardImage'
import NewPokerCardImage from './NewPokerCardImage'
import api from '../url'

class PokerPlayerCards extends React.Component {

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.finished && !nextProps.changeBet) {
      this.payPlayer(this.evaluateHand(nextProps.newPlayerCards).rank)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.finished && this.props.changeBet) {
      this.updateUserBankroll(this.props.bankroll)
    }
  }

  updateUserBankroll (bankroll) {
    return fetch(`${api}users/${this.props.userId}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        bankroll: bankroll
      })
    })
  }

  playAgain() {
    this.props.shuffleCards(this.props.deckId)
    this.props.pokerDealCards(this.props.deckId)
  }

  fixCard(card) {
    return card[0] === "0" ? "T" + card[1].toLowerCase() : card[0] + card[1].toLowerCase()
  }

  evaluateHand(cards) {
    let Hand = require('pokersolver').Hand;
    let mappedCards = cards.map(card => {return this.fixCard(card.code)})
    return Hand.solve(mappedCards)
  }

  userbetAllIn = () => {
    this.props.betAllIn()
    this.playAgain()
  }

  payPlayer(rank) {
    switch(true) {
      case(rank === 2):
        this.props.payPokerPlayer(1)
        break;
      case(rank === 3):
        this.props.payPokerPlayer(2)
        break;
      case(rank === 4):
        this.props.payPokerPlayer(3)
        break;
      case(rank === 5):
        this.props.payPokerPlayer(4)
        break;
      case(rank === 6):
        this.props.payPokerPlayer(6)
        break;
      case(rank === 7):
        this.props.payPokerPlayer(9)
        break;
      case(rank === 8):
        this.props.payPokerPlayer(25)
        break;
      case(rank === 9):
        this.props.payPokerPlayer(50)
        break;
      case(rank === 10):
        this.props.payPokerPlayer(800)
        break;
      default:
        this.props.payPokerPlayer(0)
    }
  }

  render() {
    const { playerCards, drawCards, deckId, newPlayerCards, draw, bankroll  } = this.props
    let cards = playerCards.map((card, index) => <PokerCardImage key={card.code + index} card={card}  /> )
    let newCards = newPlayerCards.map((card, index) => <NewPokerCardImage key={card.code + index} card={card}  /> )
    let count = 5 - newPlayerCards.length

    return !draw ? (
      <div className="pokerGameContent">
        <div className="evaluatedHand">
          {(this.evaluateHand(playerCards).descr)}
        </div>
        <div className="pokerPlayerCardsImages">
          {cards}
        </div>
        <div>
          <button className="pokerDealButton" onClick={()=>drawCards(deckId, count)}>DRAW</button>
        </div>
      </div>
    )
    :
    (<div className="pokerGameContent">
      <div className="finishedEvaluatedHand">
        {this.evaluateHand(newPlayerCards).descr}
      </div>
      <div className="pokerPlayerCardsImages">
        {newCards}
      </div>
      <div >
        <button className="pokerDealButton" onClick={()=>this.playAgain()}>PLAY AGAIN?</button>
        &nbsp;&nbsp;{bankroll !== 0 ? <button className="pokerDealButton" onClick={()=>this.userbetAllIn()}>ALL IN</button> : null}
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    playerCards: state.poker.playerCards,
    deckId: state.poker.deckId,
    newPlayerCards: state.poker.newPlayerCards,
    draw: state.poker.draw,
    finished: state.poker.finished,
    changeBet: state.poker.changeBet,
    bankroll: state.user.bankroll,
    userId: state.user.userId,
  }
}

export default connect(mapStateToProps, { drawCards, shuffleCards, pokerDealCards, payPokerPlayer, topUsers, betAllIn })(PokerPlayerCards)
