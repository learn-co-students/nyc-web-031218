import React, { Component } from 'react';

class Ticker extends Component {

  state =  {

  }

  static getColorForValues(newValue, oldValue) {
    if (newValue > oldValue)
      return "green"
    else if (oldValue > newValue)
      return "red"
    else
      return "black"
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { 
      color: Ticker.getColorForValues(nextProps.tickerValue, prevState.cachedTickerValue),
      cachedTickerValue: nextProps.tickerValue
    }
  }


  shouldComponentUpdate(nextProps){
    const oldValue = this.props.tickerValue
    const newValue = nextProps.tickerValue
    const difference = Math.abs(newValue - oldValue)
    console.log("scu", difference)
    const shouldUpdate = difference > 10
    return shouldUpdate
  }

  render(){
    return <span style={ { color: this.state.color } }>
      { this.props.tickerValue }
    </span>
  }
  
}

export default Ticker;
