import React, { Component } from 'react';

class Child extends Component {

  state = {
    dog: ""
  }
  
  render(){
    console.log("render")
    console.log(this.state)
    return <div className="component">
      <h2>Child</h2>
      <img src={ this.state.dog } alt="Dog" />
    </div>
  }

  componentDidMount(){
    console.log("componentDidMount")
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        console.log("setState")

        this.setState({
          dog: data.message
        });
      });
  }
}

export default Child;
