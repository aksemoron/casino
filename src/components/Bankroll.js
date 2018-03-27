import React from 'react'
import {connect} from 'react-redux'
import { increaseBet, decreaseBet, addMoney } from '../actions/game'

class Bankroll extends React.Component {
  state = {
    timeout: undefined,
    start: 120
  }

  increaseUserBet = () => {
    this.props.increaseBet()
    this.setState({
      timeout: setTimeout(this.increaseUserBet, this.state.start),
      start: this.state.start - 1
    })
  }

  decreaseUserBet = () => {
    this.props.decreaseBet()
    this.setState({
      timeout: setTimeout(this.decreaseUserBet, this.state.start),
      start: this.state.start - 1
    })
  }

  increaseBetMouseDown = () => {
    this.increaseUserBet()
  }

  decreaseBetMouseDown = () => {
    this.decreaseUserBet()
  }

  onMouseUp = () => {
    this.setState({
      timeout: clearInterval(this.state.timeout),
      start: 120
    })
  }

  capitalize = (name) => {
    return name[0].toUpperCase() + name.slice(1, name.length).toLowerCase()
  }


  render() {
    const {username, started, changeBet, bankroll, currentBet, addMoney} = this.props
    return started ? (
      <div className="bankrollBox" onMouseUp={this.onMouseUp}>
        <div className="panelHeader">{this.capitalize(username)}'s Bank</div>
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
                <button className="decreaseButton" onMouseUp={this.onMouseUp} onMouseDown={this.decreaseBetMouseDown} >-</button>
                <button className="increaseButton" onMouseUp={this.onMouseUp} onMouseDown={this.increaseBetMouseDown} >+</button>
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
    changeBet: state.blackjack.changeBet,
    started: state.blackjack.started,
  }
}

export default connect(mapStateToProps, {increaseBet, decreaseBet, addMoney})(Bankroll)
