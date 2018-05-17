import React from 'react'

export default class Lightswitch extends React.Component {

  // onClick = () => {
  //   console.log(this)
  //   this.setState({
  //     isOn: !this.state.isOn
  //   })
  // }

  lightswitchClass = () => {
    if (this.props.room.isOn)
      return "lightswitch on";
    else
      return "lightswitch"
  }

  clickFunction = () => {
    this.props.toggleFunction(this.props.room.name);
  }

  render(){

    // this is destructuring:
    // const room = this.props.room
    const { room } = this.props
    const { name, isOn } = room
    
    let message = isOn ? "off" : "on"
    return (<div className={ this.lightswitchClass() }>
      <h2>{ name }</h2>
      <button onClick={ this.clickFunction } className="switch">
        Turn { message }
      </button>
    </div>)
  }

}