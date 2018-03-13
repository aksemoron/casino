import React from 'react'
import Card from './Card'

class Player extends React.Component {
  render() {
    const { player, playerValue } = this.props
    let cards = player.map(card => <Card key={card.code} card={card}  /> )

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

export default Player
