import React from 'react';
import Stopwatch from './Stopwatch';
import Laps from './Laps';

export default class App extends React.Component {
  state = {
    laps: [],
  }
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     laps: [],
  //   }
  //
  //   this.recordLap = this.recordLap.bind(this);
  // }

  recordLap = time => {
  // recordLap(time) {
    this.setState(prevState => {
      return {
        laps: [...prevState.laps, time]
      }
    })
  }

  render() {
    return (
      <div>
        <Stopwatch recordLap={this.recordLap} />
        <Laps laps={this.state.laps} />
      </div>
    )
  }
}
