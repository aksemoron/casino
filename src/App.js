import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import GameContainer from './containers/GameContainer'
import Login from './components/Login'


class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path = "/" render={(routerProps) => <div className="App"><GameContainer {...routerProps}/></div>} />
        <Route exact path = "/login" render={(routerProps) => <div className="loginBox"><Login {...routerProps}/></div>} />
      </Switch>
    );
  }
}

export default (App);
