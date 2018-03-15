import React from 'react'
import {connect} from 'react-redux'
import { handleLogout } from '../actions/game'

class NavBar extends React.Component {
  render() {
    const {handleLogout} = this.props
    return(
      <div className="navbar">
        <div className="gameTitle">
          Flatiron's Blackjack Training School
        </div>
        <button className="logoutButton" onClick={()=>handleLogout()}>Log Out</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {username: state.username}
}

export default connect(mapStateToProps, {handleLogout})(NavBar)
