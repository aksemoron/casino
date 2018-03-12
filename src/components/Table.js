import React from 'react'
import Dealer from '../components/Dealer'
import Player from '../components/Player'
import PlayerOptions from '../components/PlayerOptions'

class Table extends React.Component {

  render() {
    const {remaining, startGame, dealCards, started, dealt, dealer, player, clickHit, clickStand, stand, dealerValue, playerValue} = this.props

    return (
      <div>
        <h1>Deck Count: {remaining}</h1><br/>
        <button onClick={startGame}>Start Game</button>
        <br/><br/>
        {started ? <button onClick={dealCards}>Deal Cards</button> : null}
        {dealt ?
          <div>
            <Dealer dealer={dealer} dealerValue={dealerValue}/>
            <Player player={player} playerValue={playerValue}/>
            {stand ? null : <PlayerOptions clickHit={clickHit} clickStand={clickStand} /> }
          </div>
        : null
        }
      </div>
    )
  }
}

export default Table
