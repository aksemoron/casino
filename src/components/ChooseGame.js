import React from 'react'
import NavBar from './NavBar'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { findUser } from '../actions/game'

class ChooseGame extends React.Component {

  chooseBlackjack() {
    this.props.history.push("/blackjack")
  }

  render() {
    return(
      <div>
        <NavBar />
        {this.props.loggedIn ?
          <div className="allFeatures">
            <button >Poker</button>
            <button onClick={() => this.chooseBlackjack()}>Blackjack</button>
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
