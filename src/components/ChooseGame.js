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

  chooseRoulette() {
    this.props.history.push("/roulette")
  }

  render() {
    return(
      <div>
        <NavBar />
        <div className="leftContainer"></div>
        <div className="rightContainer"></div>
        {this.props.loggedIn ?
          <div className="chooseGame">

            <div className="chooseGameImage" >
              <img onClick={() => this.choosePoker()} src={require("../icons/pokerButton.jpg")} alt="poker"/>
              <div className="chooseGameTitle pokerTitle" onClick={() => this.choosePoker()} >
                Poker
              </div>
            </div>

            <div className="chooseGameImage" >
              <img onClick={() => this.chooseBlackjack()} src={require("../icons/blackjackButton.jpg")} alt="blackjack"/>
              <div className="chooseGameTitle blackjackTitle" onClick={() => this.chooseBlackjack()}>
                Blackjack
              </div>
            </div>

            <div className="chooseGameImage" >
              <img onClick={() => this.chooseRoulette()} src={require("../icons/rouletteButton.jpg")} alt="roulette"/>
              <div className="chooseGameTitle rouletteTitle" onClick={() => this.chooseRoulette()}>
                Roulette
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
