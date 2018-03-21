import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import BlackjackGameContainer from './containers/BlackjackGameContainer'
import PokerGameContainer from './containers/PokerGameContainer'
import ChooseGame from './components/ChooseGame'
import Login from './components/Login'


class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path = "/blackjack" render={(routerProps) => <div className="App"><BlackjackGameContainer {...routerProps}/></div>} />
        <Route exact path = "/poker" render={(routerProps) => <div className="App"><PokerGameContainer {...routerProps}/></div>} />
        <Route exact path = "/choosegame" render={(routerProps) => <div className="App"><ChooseGame {...routerProps}/></div>} />
        <Route exact path = "/login" render={(routerProps) => <div className="loginBox"><Login {...routerProps}/></div>} />
        <Route render={(routerProps) => <div className="loginBox"><Login {...routerProps}/></div>} />
      </Switch>
    );
  }
}

export default (App);
