import React from 'react'
import {connect} from 'react-redux'
import { handleLogin, createUser, findUser, handleLogout } from '../actions/game'
import { Redirect } from 'react-router'

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.findUser(localStorage.getItem("token"))
      .then(()=>this.props.history.push("/"))
    }
  }

  handleUsernameInput = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordInput = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (!this.props.loggedIn ) ? (
      <div className="login" >
        <div className="loginBackground"><img className= "loginImage" src="https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/581497/original/resize:248x186/crop:x0y0w248h186/hash:1466606600/BlackJack_logo__2__1266795101_1266795243.jpg?1466606600" alt=""/></div>
        <div className="loginForm">
          <div>
            <div className="loginUsername">
              <input type="text" placeholder="Username" onChange={this.handleUsernameInput}/>
            </div>
            <div className="loginPassword">
              <input type="password" placeholder="Password" onChange={this.handlePasswordInput}/>
            </div>
          </div>
            <button className="submitButton" onClick={() => this.props.handleLogin(this.state.username, this.state.password)}>Submit</button>
            <button className="createUserButton" onClick={() => this.props.createUser(this.state.username, this.state.password)}>Create User</button>
        </div>
      </div>
    )
    :
    <Redirect to="/" />
  }
}

const mapStateToProps = (state) => {
  return {loggedIn: state.loggedIn}
}

export default connect(mapStateToProps, { handleLogin, createUser, findUser, handleLogout })(Login)
