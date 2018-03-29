import React from 'react'
import NavBar from './NavBar'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { findUser } from '../actions/blackjackActions'

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
        </div>
        <div className="rightContainer">
        </div>
        {this.props.loggedIn ?
          <div className="chooseGame">
            <div className="pokerButton" >
              <img onClick={() => this.choosePoker()} src={require("../icons/pokerButton.jpg")} alt="poker"/>
              <div className="pokerTitle" onClick={() => this.choosePoker()} >
                Play Poker
              </div>
            </div>
            <div className="blackjackButton" >
              <img onClick={() => this.chooseBlackjack()} src={require("../icons/blackjackButton.jpg")} alt="blackjack"/>
              <div className="blackjackTitle" onClick={() => this.chooseBlackjack()}>
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
