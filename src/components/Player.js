import React from 'react'
import CardImage from './CardImage'
import {connect} from 'react-redux'

class Player extends React.Component {
  render() {
    const { player, playerValue } = this.props
    let cards = player.map((card, index) => <CardImage key={card.code + index} card={card}  /> )

    return(
      <div className="playerCards">
        <div className="playerCardsValue">
          <h2>Player Value: {playerValue} </h2>
        </div>
        <div className="playerCardsImages">
          {cards}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.blackjack.player, playerValue: state.blackjack.playerValue
  }
}

export default connect(mapStateToProps)(Player)
