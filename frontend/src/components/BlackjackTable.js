import React from 'react'
import Dealer from './Dealer'
import Player from './Player'
import PlayerOptions from './PlayerOptions'
import {connect} from 'react-redux'
import {startGame, dealCards, dealToDealer, increaseBank, decreaseBank, topUsers, settlePlayerBank, betAllIn  } from '../actions/blackjackActions'
import api from '../url'

class BlackjackTable extends React.Component {

  updateUserBankroll (bankroll) {
    return fetch(`${api}users/${this.props.userId}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        bankroll: bankroll
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.giveDealerCards && this.props.stand) {
      this.props.dealToDealer(this.props.deckId)
    } else if (!this.props.giveDealerCards && this.props.togglePlayerBank) {
      this.settlePlayerBankroll(this.props.dealerValue, this.props.playerValue)
    }
  }

  checkWinner = (dealer, player) => {
    this.updateUserBankroll(this.props.bankroll)
    if ((dealer > player || player > 21) && (dealer <= 21)) {
      return <div className="playAgain" style={{color:"red"}}>Dealer Wins</div>
    } else if (dealer > 21 || dealer < player) {
      return <div className="playAgain" style={{color:"green"}}>Player Wins</div>
    } else {
      return <div className="playAgain">Push</div>
    }
  }

  settlePlayerBankroll = (dealer, player) => {
    if ((dealer <= 21) && (dealer > player || player > 21)) {
      this.props.decreaseBank()
    } else if (dealer > 21 || dealer < player) {
      this.props.increaseBank()
    }
  }

  userbetAllIn = () => {
    this.props.betAllIn()
    this.props.dealCards(this.props.deckId)
  }

  render() {
    const {startGame, deckId, started, dealt, stand, dealerValue, playerValue, finished, giveDealerCards,
           changeBet, bankroll, currentBet, dealCards} = this.props

    return (
      <div>
        <div>
          {!started ? <button className="startGame" onClick={() => startGame()}>START GAME</button> : null }
            <div className="currentBet">
              {started ? `Current Bet: $${currentBet}` : null }
            </div>
        </div>
        <div>
          {(started && !dealt) ? <button className="firstDeal" onClick={()=>dealCards(deckId)}>DEAL</button>: null}
        </div>
        {dealt ?
          <div>
            <Dealer />
            <Player />
            <div className="playerOptions">
              {stand ? null : <PlayerOptions /> }
              {finished && !giveDealerCards ? this.checkWinner(dealerValue, playerValue) : null}
              {(changeBet && started) ?
                <div>
                  &nbsp;&nbsp;&nbsp;{bankroll !== 0 || currentBet !== 0 ? <button onClick={()=>dealCards(deckId)}>DEAL</button>: null }
                  &nbsp;{bankroll !== 0 ? <button onClick={()=>this.userbetAllIn()}>ALL IN</button> : null}
                </div>
              : null}
            </div>
          </div>
        : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.blackjack.started, dealt: state.blackjack.dealt, deckId: state.blackjack.deckId,
    finished: state.blackjack.finished, stand: state.blackjack.stand, dealerValue: state.blackjack.dealerValue,
    playerValue: state.blackjack.playerValue, giveDealerCards: state.blackjack.giveDealerCards, togglePlayerBank: state.blackjack.togglePlayerBank,
    changeBet: state.blackjack.changeBet, remaining: state.blackjack.remaining,
    loggedIn: state.user.loggedIn, userId: state.user.userId, currentBet: state.user.currentBet,
    bankroll: state.user.bankroll
  }
}

export default connect(mapStateToProps, {startGame, dealCards, dealToDealer, increaseBank, decreaseBank, topUsers, settlePlayerBank, betAllIn })(BlackjackTable)
