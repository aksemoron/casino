import React from 'react'
import {connect} from 'react-redux'
import { toggleCardCounter } from '../actions/game.js'

class CardCount extends React.Component {
  render() {
    const {cardCount, cardCounterOn, toggleCardCounter, remaining} = this.props
    let trueCount = Math.ceil(cardCount / Math.round(remaining/52))
    return cardCounterOn ? (
      <div className="cardCounter">
        <div style={{color:"blue"}}>
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
        <div>
          <button onClick={()=>toggleCardCounter()}>Off</button>
        </div>
      </div>
    )
    :
    <button onClick={()=>toggleCardCounter()}>On</button>
  }
}

const mapStateToProps = (state) => {
  return {
    cardCount: state.cardCount,
    cardCounterOn: state.cardCounterOn,
    remaining: state.remaining
  }
}

export default connect(mapStateToProps, { toggleCardCounter})(CardCount)
