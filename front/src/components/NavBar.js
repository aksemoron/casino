import React from 'react'
import {connect} from 'react-redux'
import { handleLogout, resetGames } from '../actions/blackjackActions'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  render() {
    const {handleLogout, resetGames} = this.props
    return(
      <div className="navbar">
        <div className="gameTitle">
          <Link to="/choosegame" onClick={()=>resetGames()}>
            <span className="rainbow">Flatiron's Casino</span>
            <img className="titlelogo" src={require("../icons/titlelogo.png")} width="40px" alt=""/>
          </Link>
        </div>

        <div className="navButtons">
          <button className="logoutButton" onClick={()=>handleLogout()}>Log Out</button>
          <Link to="/choosegame" onClick={()=>resetGames()}>
            <button className="chooseGameButton">Choose Game</button>
          </Link>
        </div>

      </div>
    )
  }
}

export default connect(null, {handleLogout, resetGames })(NavBar)
