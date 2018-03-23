import React from 'react'
import {connect} from 'react-redux'
import { handleLogout, resetGames } from '../actions/game'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  render() {
    const {handleLogout, resetGames} = this.props
    return(
      <div className="navbar">
        <div className="gameTitle">
          <Link to="/choosegame" onClick={()=>resetGames()}>
            <span className="rainbow">Flatiron's Casino Training School</span>
          </Link>
        </div>
        <button className="logoutButton" onClick={()=>handleLogout()}>Log Out</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {username: state.user.username}
}

export default connect(mapStateToProps, {handleLogout, resetGames })(NavBar)
