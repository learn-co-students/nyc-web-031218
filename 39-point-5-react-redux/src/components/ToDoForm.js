import React from 'react'


const DEFAULT_STATE = {
  name: "",
  time: ""    
}

export default class ToDoForm extends React.Component {

  state = { ...DEFAULT_STATE }


  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("onsubmit in ToDoForm")
    this.props.newTodo(this.state)
    this.setState({ ...DEFAULT_STATE });
  }

  render() {
    return (<form onSubmit={ this.onSubmit }>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.onChange } />
      <label htmlFor="time">Time</label>
      <input type="text" name="time" id="time" value={ this.state.time } onChange={ this.onChange } />
      <input type="submit" />
    </form>);
  }

} 


