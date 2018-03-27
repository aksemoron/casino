import React from 'react'
import PokerTable from '../components/PokerTable'
import NavBar from '../components/NavBar'
import LeftContainer from './LeftContainer'
import PokerPayout from '../components/PokerPayout'
import {connect} from 'react-redux'
import { findUser } from '../actions/game'
import { Redirect } from 'react-router'

class PokerGameContainer extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) {
      this.props.findUser(token)
      .then(()=>this.props.history.push("/poker"))
    }
  }

  playPoker() {
    this.props.history.push("/blackjack")
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.loggedIn ?
          <div className="allFeatures">
            <div className="pokerTable" >
              <PokerTable />
            </div>
            <div className="pokerTopContainer">
              <PokerPayout />
            </div>
            <div className="leftContainer">
              <LeftContainer />
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
  return {loggedIn: state.user.loggedIn}
}

export default connect(mapStateToProps, {findUser})(PokerGameContainer)
