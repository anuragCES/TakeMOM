import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Login from './Views/Login/Login'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Login} />
      </Router>
    );
  }
}

export default App;
