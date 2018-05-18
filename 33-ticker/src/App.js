import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TickerWrapper from './Components/TickerWrapper'

class App extends Component {


  state = {
    hideTicker: false
  }
  
  onClick = () => {
    this.setState({
      hideTicker: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="component" onClick={ this.onClick }>
          <h2>App</h2>
          { this.state.hideTicker ? "" : <TickerWrapper /> }
        </div>
      </div>
    );
  }
}

export default App;
