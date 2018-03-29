import React from 'react'
import BlackjackTable from '../components/BlackjackTable'
import NavBar from '../components/NavBar'
import LeftContainer from './LeftContainer'
import BlackjackRightContainer from './BlackjackRightContainer'
import { connect } from 'react-redux'
import { findUser } from '../actions/blackjackActions'
import { Redirect } from 'react-router'

class BlackjackGameContainer extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) {
      this.props.findUser(token)
      .then(()=>this.props.history.push("/blackjack"))
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.loggedIn ?
          <div className="allFeatures">
            <div className="blackjackTable" >
              <BlackjackTable />
            </div>
            <div className="leftContainer">
              <LeftContainer />
            </div>
            <div className="rightContainer">
              <BlackjackRightContainer />
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

export default connect(mapStateToProps, {findUser})(BlackjackGameContainer)
