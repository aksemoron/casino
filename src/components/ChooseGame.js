import React from 'react'
import NavBar from './NavBar'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { findUser } from '../actions/game'
import LeftContainer from '../containers/LeftContainer'

class ChooseGame extends React.Component {

  chooseBlackjack() {
    this.props.history.push("/blackjack")
  }

  choosePoker() {
    this.props.history.push("/poker")
  }

  render() {
    return(
      <div>
        <NavBar />
        <div className="leftContainer">
          <LeftContainer/>
        </div>
        <div className="rightContainer">
        </div>
        {this.props.loggedIn ?
          <div className="chooseGame">
            <div className="pokerButton" onClick={() => this.choosePoker()}>
              <img src={require("../icons/pokerButton.jpg")} width="500px" alt="poker"/>
              <div className="pokerTitle">
                Play Poker
              </div>
            </div>
            <div className="blackjackButton" onClick={() => this.chooseBlackjack()}>
              <img src={require("../icons/blackjackButton.jpg")} width="500px" alt="blackjack"/>
              <div className="blackjackTitle">
                Play Blackjack
              </div>
            </div>
          </div>
        :
        <Redirect to="/login" />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps, {findUser})(ChooseGame)
