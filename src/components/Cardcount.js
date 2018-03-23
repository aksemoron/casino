import React from 'react'
import {connect} from 'react-redux'
import { toggleCardCounter, startGame } from '../actions/game.js'

class CardCount extends React.Component {
  render() {
    const {cardCount, cardCounterOn, toggleCardCounter, remaining, started, startGame} = this.props
    let trueCount = Math.ceil(cardCount / Math.round(remaining/52))
    return cardCounterOn ? (
      <div className="cardCounter">
        <div className="panelHeader">
          Card Counter
        </div>
        {started ?
          <div className="cardsLeft">
            <div className="remainingCards">
              <img className="remainingCardsIcon" src={require(`../icons/cards.svg`)} width="60px" alt=""/>
              <span className="tooltiptext">Cards Left: {remaining}</span>
            </div>
            <button className="cardCountButton" onClick={()=>toggleCardCounter()}>Turn Off</button>
            <div className="refresh">
              <button className="refreshButton" onClick={() => startGame()} ><img src={require(`../icons/refresh-button.svg`)} width="50px" alt=""/></button>
              <span className="tooltiptext">Refresh</span>
            </div>
          </div> : null }
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
      {started ?
        <div className="cardsLeft">
          <div className="remainingCards">
            <img className="remainingCardsIcon" src={require(`../icons/cards.svg`)} width="60px" alt=""/>
            <span className="tooltiptext">Cards Left: {remaining}</span>
          </div>
          <button className="cardCountButton" onClick={()=>toggleCardCounter()}>Turn On</button>
          <div className="refresh">
            <button className="refreshButton" onClick={() => startGame()} ><img src={require(`../icons/refresh-button.svg`)} width="50px" alt=""/></button>
            <span className="tooltiptext">Refresh</span>
          </div>
        </div> : null }
    </div>

  }
}

const mapStateToProps = (state) => {
  return {
    cardCount: state.blackjack.cardCount,
    cardCounterOn: state.blackjack.cardCounterOn,
    remaining: state.blackjack.remaining,
    started: state.blackjack.started,
  }
}

export default connect(mapStateToProps, { toggleCardCounter, startGame})(CardCount)
