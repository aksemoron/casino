import React from 'react'
import {connect} from 'react-redux'
import { increaseBet, decreaseBet } from '../actions/game'

class Bankroll extends React.Component {
  render() {
    return(
      <div>
        <div>
          Bank: {this.props.bankroll}
        </div>
        <div>
          Bet: {this.props.currentBet}
        </div>
        <div>
          <button onClick={() => this.props.decreaseBet()}>-</button><button onClick={() => this.props.increaseBet()}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bankroll: state.bankroll,
    currentBet: state.currentBet
  }
}

export default connect(mapStateToProps, {increaseBet, decreaseBet})(Bankroll)
