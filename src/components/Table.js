import React from 'react'
import Dealer from '../components/Dealer'
import Player from '../components/Player'
import PlayerOptions from '../components/PlayerOptions'
import {connect} from 'react-redux'
import {startGame, dealCards, dealToDealer, increaseBank, decreaseBank, topUsers, settlePlayerBank, increaseBet, decreaseBet, addMoney, betAllIn  } from '../actions/game'

class Table extends React.Component {

  updateUserBankroll (bankroll) {
    return fetch(`http://localhost:3000/users/${this.props.userId}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        bankroll: bankroll
      })
    }).then(this.props.topUsers())
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
      return <div className="playAgain">Dealer Wins</div>
    } else if (dealer > 21 || dealer < player) {
      return <div className="playAgain">Player Wins</div>
    } else
      return <div className="playAgain">Push</div>
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
    const {remaining, startGame, deckId, started, dealt, stand, dealerValue, playerValue, finished, giveDealerCards,
           changeBet, bankroll, currentBet, increaseBet, decreaseBet, addMoney, dealCards} = this.props
    return (
      <div>
        <div>
          {!started ? <button className="startGame"><img className="startGameButton" onClick={() => startGame()} src="http://pinnalla.trafi.fi/game/img/button-start-game.png" width="300px" alt=""/></button> : null }
          {started ?
            <div className="cardsLeft">
              <div className="remainingCards">
                <img src={require(`../icons/cards.svg`)} width="60px" alt=""/>
                <span className="tooltiptext">Cards Left: {remaining}</span>
              </div>
              <div className="refresh">
                <button className="refreshButton" onClick={() => startGame()} ><img src={require(`../icons/refresh-button.svg`)} width="50px" alt=""/></button>
                <span className="tooltiptext">Refresh</span>
              </div>
            </div> : null }
      </div>
        <div className="dealButton">
          {started && !dealt ? <button onClick={()=>dealCards(deckId)}>DEAL</button>: null}
        </div>
        {dealt ?
          <div>
            <Dealer />
            <Player />
            <div className="playerOptions">
              {stand ? null : <PlayerOptions /> }
              {finished && !giveDealerCards ? this.checkWinner(dealerValue, playerValue) : null}
              {changeBet && started ?
                <div>
                  &nbsp;&nbsp;&nbsp;<button onClick={()=>dealCards(deckId)}>DEAL</button>&nbsp;
                  &nbsp;{bankroll !== 0 ? <button onClick={()=>this.userbetAllIn()}>All In</button> : null}
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
    started: state.started, remaining: state.remaining, dealt: state.dealt, deckId: state.deckId,
    finished: state.finished, stand: state.stand, dealerValue: state.dealerValue,
    playerValue: state.playerValue, giveDealerCards: state.giveDealerCards, loggedIn: state.loggedIn,
    userId: state.userId, togglePlayerBank: state.togglePlayerBank, currentBet: state.currentBet,
    bankroll: state.bankroll, changeBet: state.changeBet
  }
}

export default connect(mapStateToProps, {startGame, dealCards, dealToDealer, increaseBank, decreaseBank, topUsers, settlePlayerBank, increaseBet, decreaseBet, addMoney, betAllIn })(Table)
