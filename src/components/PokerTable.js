import React from 'react'
import {connect} from 'react-redux'
import { pokerStartGame, pokerDealCards  } from '../actions/pokerActions'
import PokerPlayerCards from './PokerPlayerCards'

class PokerTable extends React.Component {
  render() {
    const {started, deckId, dealt, pokerStartGame, pokerDealCards  } = this.props
    return(
      <div>
        {!started ? <button className="startGame pokerBeginButton" onClick={() => pokerStartGame()}>START GAME</button> : null }
        {(started && !dealt) ? <button className="firstDeal pokerBeginButton" onClick={()=>pokerDealCards(deckId)}>DEAL</button>: null}
        {dealt ? <PokerPlayerCards /> : null}
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
