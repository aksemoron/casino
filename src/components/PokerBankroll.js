import React from 'react'
import {connect} from 'react-redux'
import { increaseBet, decreaseBet, addMoney } from '../actions/game'

class Bankroll extends React.Component {
  render() {
    const {username, started, changeBet, bankroll, currentBet, decreaseBet, increaseBet, addMoney} = this.props
    return started ? (
      <div className="bankrollBox">
        <div className="panelHeader">{username}'s BANK</div>
        <div>
          <img className="bankImage" src={require("../icons/ancient.svg")} width="150px" alt=""/>
        </div>
        <div>
          <img className="moneyImage" src={require("../icons/money-bag.svg")} width="60px"  alt=""/> ${bankroll}
        </div>
        <div>
          <img className="betImage" src={require("../icons/coins.svg")} width="55px" alt=""/> ${currentBet}
        </div>
        {changeBet ?
        <div>
            {bankroll !== 0 || currentBet !== 0 ?
              <div className="betButtons">
                <button className="decreaseButton" onClick={() => decreaseBet()} >-</button>
                <button className="increaseButton" onClick={() => increaseBet()} >+</button>
              </div>
            : null}
          {((bankroll === 0 && currentBet === 0) && (started)) ?
            <img className="piggy" onClick={() => addMoney()} src={require("../icons/piggybank.svg")} width="120px" alt=""/>
            : null }
        </div>
        : null}
      </div>
    )
    : null
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    bankroll: state.user.bankroll,
    currentBet: state.user.currentBet,
    changeBet: state.poker.changeBet,
    started: state.poker.started,
  }
}

export default connect(mapStateToProps, {increaseBet, decreaseBet, addMoney})(Bankroll)
