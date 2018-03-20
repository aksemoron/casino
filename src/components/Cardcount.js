import React from 'react'
import {connect} from 'react-redux'
import { toggleCardCounter } from '../actions/game.js'

class CardCount extends React.Component {
  render() {
    const {cardCount, cardCounterOn, toggleCardCounter, remaining} = this.props
    let trueCount = Math.ceil(cardCount / Math.round(remaining/52))
    return cardCounterOn ? (
      <div className="cardCounter">
        <div className="panelHeader">
          Card Counter
        </div>
        <div>
          <button className="cardCountButton" onClick={()=>toggleCardCounter()}>Turn Off</button>
        </div>
        <div style={{color:"red"}}>
          Decks Left: {Math.round(remaining/52)}
        </div>
        <div>
          Card Count
        </div>
        <div style={{color: cardCount < 0 ? "red" : "green" }}>
          {cardCount}
        </div>
        <div>
          True Count
        </div>
        <div style={{color: cardCount < 0 ? "red" : "green" }}>
          {!isNaN(trueCount) ? trueCount :null}
        </div>
      </div>
    )
    :
    <div className="cardCounter">
      <div className="panelHeader">
        Card Counter
      </div>
      <button className="cardCountButton" onClick={()=>toggleCardCounter()}>Turn On</button>
    </div>

  }
}

const mapStateToProps = (state) => {
  return {
    cardCount: state.blackjack.cardCount,
    cardCounterOn: state.blackjack.cardCounterOn,
    remaining: state.blackjack.remaining
  }
}

export default connect(mapStateToProps, { toggleCardCounter})(CardCount)
