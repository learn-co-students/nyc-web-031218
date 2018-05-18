import React, { Component } from 'react';
import Child from './Child'

class Parent extends Component {

  state = {
    showChild: true
  }

  handleClick = () => {
    this.setState({
      showChild: false
    })
  }

  render(){
    console.log("parent render")

    return <div className="component" onClick={ this.handleClick }>
      <h2>Parent</h2>
      { this.state.showChild ? <Child /> : "" }
    </div>
  }


}

export default Parent;
