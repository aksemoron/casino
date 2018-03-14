import React from 'react'
import Dealer from '../components/Dealer'
import Player from '../components/Player'
import PlayerOptions from '../components/PlayerOptions'
import {connect} from 'react-redux'
import {startGame, dealCards, dealToDealer, increaseBank, decreaseBank } from '../actions/game'

class Table extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (this.props.giveDealerCards && this.props.stand) {
      console.log("hit")
      this.props.dealToDealer(this.props.deckId)
    }
  }

  checkWinner = (dealer, player) => {
    let playAgainButton = <button onClick={() => this.props.dealCards(this.props.deckId)}>Deal Again</button>
    if ((dealer > player || player > 21) && (dealer <= 21)) {
      this.props.decreaseBank()
      return <h1>Dealer Wins {playAgainButton}</h1>
    } else if (dealer > 21 || dealer < player) {
      this.props.increaseBank()
      return <h1>Player Wins {playAgainButton}</h1>
    } else
      return <h1>Draw {playAgainButton}</h1>
  }

  render() {
    const {remaining, startGame, dealCards, deckId, started, dealt, stand, dealerValue, playerValue, finished} = this.props
    return (
      <div>
        <div className="startGame">
          <button onClick={() => startGame()}>Start New Game</button>
        <div className="cardsLeft">
          Cards Left: {remaining}
        </div>
      </div>
        <div className="dealButton">
          {started && !dealt ? <button onClick={() => dealCards(deckId)}>Deal Cards</button> : null}
        </div>
        {dealt ?
          <div>
            <Dealer />
            <Player />
            <div className="playerOptions">
              {stand ? null : <PlayerOptions /> }
              {finished ? this.checkWinner(dealerValue, playerValue) : null}
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
    playerValue: state.playerValue, giveDealerCards: state.giveDealerCards, loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, {startGame, dealCards, dealToDealer, increaseBank, decreaseBank })(Table)
