import React, { Component } from 'react';
import Parent from './Parent';

class Grandparent extends Component {


  render(){
    return <div className="component">
      <h2>Grandparent</h2>
      <Parent />
    </div>
  }
}

export default Grandparent;
