import React from 'react'
import Card from './Card'

class Player extends React.Component {
  render() {
    const { player, playerValue } = this.props
    let cards = player.map(card => <Card key={card.code} card={card}  /> )
    
    return(
      <div className="playerCards">
        <div className="playerCardsValue">
          <h1>Player Value: {playerValue} </h1>
        </div>
        <div className="playerCardsImages">
          {cards}
        </div>
      </div>
    )
  }
}

export default Player
