import React from 'react'
import {connect} from 'react-redux'
import {  } from '../actions/pokerActions'
import PokerCardImage from './PokerCardImage'

class PokerPlayerCards extends React.Component {
  render() {
    const { playerCards } = this.props
    let cards = playerCards.map((card, index) => <PokerCardImage key={card.code + index} card={card}  /> )
    return(
      <div className="pokerPlayerCardsImages">
        {cards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    playerCards: state.poker.playerCards
  }
}

export default connect(mapStateToProps, {})(PokerPlayerCards)
