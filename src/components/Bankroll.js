import React from 'react'
import {connect} from 'react-redux'
import { increaseBet, decreaseBet, addMoney } from '../actions/game'

class Bankroll extends React.Component {
  render() {
    const {changeBet, username, bankroll, currentBet, decreaseBet, increaseBet, addMoney, finished, dealt} = this.props
    return(
      <div className="bankrollBox">
        <div>
          {username.toUpperCase()}
        </div>
        <div>
          <img className="moneyImage" src="http://www.clker.com/cliparts/h/D/A/4/R/d/money-bag-md.png" width="50px" height="70px" alt=""/> ${bankroll}
        </div>
        <div>
          <img className="betImage" src="http://www.pushbuttonprofits.com/images/money_button_lg.png" width="55px" alt=""/> ${currentBet}
        </div>
        {changeBet ?
        <div>
            {bankroll !== 0 || currentBet !== 0 ?
              <div>
                <img className="betButtons" onClick={() => decreaseBet()} src="https://cdn.pixabay.com/photo/2013/07/12/17/00/remove-151678_1280.png" height="80px" alt=""/>&nbsp;
                <img className="betButtons" onClick={() => increaseBet()} src="https://cdn.pixabay.com/photo/2014/03/25/17/00/plus-297823_1280.png" height="80px" alt=""/>
              </div>
            : null}
          {((bankroll === 0 && currentBet === 0) && (dealt && finished)) ? <img onClick={() => addMoney()} src="http://www.vancitymommyd.com/wp-content/uploads/2018/01/piggy-bank-clipart-piggy-bank-clipart-images-clipartfest-car-clipartbarn-animations.png" width="100px" alt=""/> : null }
        </div>
        : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    bankroll: state.bankroll,
    currentBet: state.currentBet,
    finished: state.finished,
    changeBet: state.changeBet,
    dealt: state.dealt
  }
}

export default connect(mapStateToProps, {increaseBet, decreaseBet, addMoney})(Bankroll)
