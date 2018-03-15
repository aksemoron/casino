import React from 'react'
import Table from '../components/Table'
import NavBar from '../components/NavBar'
import LeaderBoard from '../components/LeaderBoard'
import Bankroll from '../components/Bankroll'
import {connect} from 'react-redux'
import { findUser } from '../actions/game'
import { Redirect } from 'react-router'

class GameContainer extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) {
      debugger
      this.props.findUser(token)
      .then(()=>this.props.history.push("/"))
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.loggedIn ?
          <div className="allFeatures">
            <div className="leaderboard">
              <LeaderBoard />
            </div>
            <div className="table" >
              <Table />
            </div>
            <div className="bankroll">
              <Bankroll />
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
  return {loggedIn: state.loggedIn}
}

export default connect(mapStateToProps, {findUser})(GameContainer)
