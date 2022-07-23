import React from 'react'
import {connect} from 'react-redux'
import {clickHit, clickStand, clickDouble} from '../actions/blackjackActions'

class PlayerOptions extends React.Component {
  render() {
    const {player, clickHit, clickStand, clickDouble, currentBet, bankroll, deckId} = this.props

    return (
      <div className="playerOptions">
        <button onClick={() => clickHit(deckId)}>HIT</button>
        {bankroll >= currentBet && player.length === 2  ? <button onClick={() => clickDouble(deckId)}>DOUBLE</button> : null }
        <button onClick={() => clickStand()}>STAND</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deckId: state.blackjack.deckId,
    dealerValue: state.blackjack.dealerValue,
    playerValue: state.blackjack.playerValue,
    player: state.blackjack.player,
    currentBet: state.user.currentBet,
    bankroll: state.user.bankroll,
  }
}

export default connect(mapStateToProps, {clickHit, clickStand, clickDouble})(PlayerOptions)
