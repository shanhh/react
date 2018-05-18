import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Router from './router'
import FootBar from './components/FootBar'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Router></Router>
          <FootBar></FootBar>
        </div>
      </HashRouter>
    );
  }
}

export default App;
