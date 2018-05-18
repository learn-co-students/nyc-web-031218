import React, { Component } from 'react';
import Ticker from './Ticker'


class TickerWrapper extends Component {


  state = {
    number: 0
  }


  componentDidMount(){
    this.intervalId = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100)
      this.setState({
        number: randomNumber
      })
    }, 1000)
  }

  componentWillUnmount(){
    console.log("dhksjdhf")
    clearInterval(this.intervalId)
  }

  render() {
    return (
      <div onClick={ this.onClick }>
        <Ticker tickerValue={ this.state.number } />
      </div>
    );
  }
}

export default TickerWrapper;
