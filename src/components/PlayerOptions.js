import React from 'react'
import {connect} from 'react-redux'
import {clickHit, clickStand, clickDouble} from '../actions/game'

class PlayerOptions extends React.Component {
  render() {
    const {clickHit, clickStand, clickDouble, currentBet, bankroll, deckId} = this.props

    return (
      <div className="playerOptions">
        <button onClick={() => clickHit(deckId)}>HIT</button>
        {bankroll >= currentBet ? <button onClick={() => clickDouble(deckId)}>DOUBLE</button> : null }
        <button onClick={() => clickStand()}>STAND</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deckId: state.deckId,
    dealerValue: state.dealerValue,
    playerValue: state.playerValue,
    currentBet: state.currentBet,
    bankroll: state.bankroll
  }
}

export default connect(mapStateToProps, {clickHit, clickStand, clickDouble})(PlayerOptions)
