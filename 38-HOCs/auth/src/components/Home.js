import React, { Component } from 'react';
import logo from '../assets/svg/logo.svg';
import '../assets/css/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello World!
        </p>
      </div>
    )
  }
}
