import React from 'react'
import Dealer from '../components/Dealer'
import Player from '../components/Player'
import PlayerOptions from '../components/PlayerOptions'
import {connect} from 'react-redux'
import {startGame, dealCards, dealToDealer, increaseBank, decreaseBank } from '../actions/game'

class Table extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (this.props.giveDealerCards && this.props.stand) {
      this.props.dealToDealer(this.props.deckId)
    }
  }

  checkWinner = (dealer, player) => {
    let playAgainButton = <img onClick={() => this.props.dealCards(this.props.deckId)} src="http://www.sosseafest.org/wp-content/uploads/2018/02/Extraordinay-Deck-Of-Cards-Clip-Art-53-In-History-Clipart-with-Deck-Of-Cards-Clip-Art.jpg" width="100px" alt=""/>
    if ((dealer > player || player > 21) && (dealer <= 21)) {
      this.props.decreaseBank()
      return <div>{playAgainButton}<h1>Dealer Wins</h1></div>
    } else if (dealer > 21 || dealer < player) {
      this.props.increaseBank()
      return <div>{playAgainButton}<h1>Player Wins</h1></div>
    } else
      return <div>{playAgainButton}<h1>Push</h1></div>
  }

  render() {
    const {remaining, startGame, dealCards, deckId, started, dealt, stand, dealerValue, playerValue, finished} = this.props
    return (
      <div>
        <div className="startGame">
          {!started ? <img onClick={() => startGame()} src="http://pinnalla.trafi.fi/game/img/button-start-game.png" width="200px" alt=""/> : null }
          {started ?
            <div className="cardsLeft">
              {remaining}
              <img src="http://clipart-library.com/images/6Tp5qjjnc.png" width= "40px" alt=""/>
              <span className="tooltiptext">{remaining} cards left</span>
              <img onClick={() => startGame()} src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/blue-tiedyed-cloth-icons-arrows/004909-blue-tiedyed-cloth-icon-arrows-arrows1-shuffle.png" width="50px" alt=""/>
            </div> : null }
      </div>
        <div className="dealButton">
          {started && !dealt ? <img onClick={() => dealCards(deckId)} src="http://www.sosseafest.org/wp-content/uploads/2018/02/Extraordinay-Deck-Of-Cards-Clip-Art-53-In-History-Clipart-with-Deck-Of-Cards-Clip-Art.jpg" width="200px" alt=""/> : null}
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
