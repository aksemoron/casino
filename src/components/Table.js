import React from 'react'
import Dealer from '../components/Dealer'
import Player from '../components/Player'
import PlayerOptions from '../components/PlayerOptions'
import {connect} from 'react-redux'
import {startGame, dealCards, dealToDealer, increaseBank, decreaseBank } from '../actions/game'

class Table extends React.Component {

  updateUserBankroll (bankroll) {
    return fetch(`http://localhost:3000/users/${this.props.userId}`, {
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
    }
  }

  checkWinner = (dealer, player) => {
    let playAgainButton = <button onClick={()=>this.props.dealCards(this.props.deckId)}>DEAL AGAIN?</button>

    if ((dealer > player || player > 21) && (dealer <= 21)) {
      return <div>{playAgainButton}<h1>Dealer Wins</h1></div>
    } else if (dealer > 21 || dealer < player) {
      return <div>{playAgainButton}<h1>Player Wins</h1></div>
    } else
      return <div>{playAgainButton}<h1>Push</h1></div>
  }

  settlePlayerBankroll = (dealer, player) => {
    if ((dealer > player || player > 21) && (dealer <= 21)) {
      this.props.decreaseBank()
      this.updateUserBankroll(this.props.bankroll)
    } else if (dealer > 21 || dealer < player) {
      this.props.increaseBank()
      this.updateUserBankroll(this.props.bankroll)
    }
  }

  render() {
    const {remaining, startGame, dealCards, deckId, started, dealt, stand, dealerValue, playerValue, finished, giveDealerCards} = this.props
    return (
      <div>
        <div className="startGame">
          {!started ? <img onClick={() => startGame()} src="http://pinnalla.trafi.fi/game/img/button-start-game.png" width="200px" alt=""/> : null }
          {started ?
            <div className="cardsLeft">
              <div className="remainingCards">
                <img src={require(`../icons/cards.svg`)} width="60px" alt=""/>
                <span className="tooltiptext">{remaining} cards left</span>
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
              {finished && this.props.settlePlayerBank ? this.settlePlayerBankroll(dealerValue, playerValue) : null}
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
    userId: state.userId, bankroll: state.bankroll, settlePlayerBank: state.settlePlayerBank
  }
}

export default connect(mapStateToProps, {startGame, dealCards, dealToDealer, increaseBank, decreaseBank })(Table)
