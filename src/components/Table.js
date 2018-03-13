import React from 'react'
import Dealer from '../components/Dealer'
import Player from '../components/Player'
import PlayerOptions from '../components/PlayerOptions'

class Table extends React.Component {

  checkWinner = (dealer, player) => {
    if ((dealer > player || player > 21) && (dealer <= 21)) {
      return <h1>Dealer Wins</h1>
    } else if (dealer > 21 || dealer < player) {
      return <h1>Player Wins</h1>
    } else
      return <h1>Draw</h1>
  }

  render() {
    const {remaining, startGame, dealCards, started, dealt, dealer, player,
      clickHit, clickStand, stand, dealerValue, playerValue, finished} = this.props

    return (
      <div>
        <h1>Deck Count: {remaining}</h1><br/>
        <button onClick={startGame}>Start New Game</button>
        <br/><br/>
        {started ? <button onClick={dealCards}>Deal Cards</button> : null}
        {dealt ?
          <div>
            <Dealer dealer={dealer} dealerValue={dealerValue}/>
            <Player player={player} playerValue={playerValue}/>
            {stand ? null : <PlayerOptions clickHit={clickHit} clickStand={clickStand} /> }
            {finished ? this.checkWinner(dealerValue, playerValue) : null}
          </div>
        : null
        }
      </div>
    )
  }
}

export default Table
