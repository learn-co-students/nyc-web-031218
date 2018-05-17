import React from 'react'

export default class LightswitchForm extends React.Component {

  state = {
    name: "room",
    isOn: false
  }

  submit = (e) => { 
    e.preventDefault();
    const { isOn, name } = this.state;
    const room = { isOn, name };
    this.props.newRoom(room)
  }

  change = (e) => {
    this.setState({
      // this is pretty cool — the brackets let you
      // use the value of e.target.name (which will be
      // either "name" or "isOn") to determine the key
      // in state to set. Another note — if we don't include
      // a key in setState, it won't get set — so we don't
      // risk losing the other key here even though we only
      // provide one in this object passed to state, and we're
      // not spreading existing state or anything — React 
      // handles this for us 
      [e.target.name]: e.target.value.toUpperCase()
    }, () => console.log(this.state))
  }

  render(){
    console.log(this.state)
    return <form onSubmit={ this.submit }>
      <label htmlFor="name">Name</label>
      <input onChange={ this.change } type="text" name="name" id="name" value={ this.state.name } />
      <label htmlFor="isOn">Is on?</label>
      <select onChange={ this.change } type="text" name="isOn" id="isOn" value={ this.state.isOn }>
        <option value="true">On</option>
        <option value="false">Off</option>
      </select>
      <input type="submit" />
    </form>
  }

}