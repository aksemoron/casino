import React from 'react'
import {connect} from 'react-redux'
import { pokerStartGame, pokerDealCards  } from '../actions/pokerActions'
import PokerPlayerCards from './PokerPlayerCards'

class PokerTable extends React.Component {
  render() {
    const {started, deckId, dealt, pokerStartGame, pokerDealCards  } = this.props
    return(
      <div>
        <div>
          {!started ? <button className="startGame pokerButton" onClick={() => pokerStartGame()}>START GAME</button> : null }
        </div>
        <div>
          {(started && !dealt) ? <button className="firstDeal pokerButton" onClick={()=>pokerDealCards(deckId)}>DEAL</button>: null}
        </div>
        {dealt ?
        <PokerPlayerCards />
        : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.poker.started,
    deckId: state.poker.deckId,
    dealt: state.poker.dealt,
  }
}
export default connect(mapStateToProps, { pokerStartGame, pokerDealCards })(PokerTable)
