import React from 'react'

export default class Lightswitch extends React.Component {

  state = {
    isOn: false
  }

  onClick = () => {
    console.log(this)
    this.setState({
      isOn: !this.state.isOn
    })
  }

  lightswitchClass = () => {
    console.log(this)
    console.log("lsc")
    if (this.state.isOn)
      return "lightswitch on";
    else
      return "lightswitch"
  }

  render(){
    console.log("render")
    let message = this.state.isOn ? "off" : "on"
    return (<div className={ this.lightswitchClass() }>
      <button onClick={ this.onClick } className="switch">
        Turn { message }
      </button>
    </div>)
  }

}