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
    const token = localStorage.getItem("token")
    if (token) {
      this.props.findUser(token)
      .then(()=>this.props.history.push("/choosegame"))
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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleLogin(this.state.username, this.state.password)
  }

  render() {
    return !this.props.loggedIn  ? (
      <div className="login" >
        <div>
          <img src={require("../icons/casino.png")} width="400px" alt=""/>
          <form className="loginForm" onSubmit={this.handleSubmit}>
            <div className="loginUsername">
              <input type="text" placeholder="Username" onChange={this.handleUsernameInput}/>
            </div>
            <div className="loginPassword">
              <input type="password" placeholder="Password" onChange={this.handlePasswordInput}/>
            </div>
            {this.props.error ? <div className="error">{this.props.error}</div> : null }
            <button className="submitButton">Submit</button>
            <button className="createUserButton" onClick={() => this.props.createUser(this.state.username, this.state.password)}>Create User</button>
          </form>
        </div>
        <div className="loginBackground"></div>
      </div>
    )
    :
    <Redirect to="/choosegame" />
  }
}

const mapStateToProps = (state) => {
  return {loggedIn: state.user.loggedIn, error: state.user.error}
}

export default connect(mapStateToProps, { handleLogin, createUser, findUser, handleLogout })(Login)
