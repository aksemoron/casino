import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import manageGame from './reducers/manageGame'

import { BrowserRouter as Router} from 'react-router-dom'

const store = createStore(manageGame, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  , document.getElementById('root')
);
