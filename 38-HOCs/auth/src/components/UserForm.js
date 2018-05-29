import React, { Component } from 'react';
import '../assets/css/UserForm.css';

/*
  We probably wouldn't make this a generic form for both login and registration.
  Some common reasons why:
  - registration forms would probably have a lot more fields
  - how we display error messages will probably be different
*/

const DEFAULT_STATE = {
    username: "",
    password: "",
    errors:[]
  }
export default class UserForm extends Component {
  state = { ...DEFAULT_STATE }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(this.props.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ 
        username: this.state.username, 
        password: this.state.password 
      })
    }).then(res => res.json())
      .then(json => {
        if (json.errors) {
          this.setState({
            errors: json.errors
          })
        } else {
          this.setState({
            ...DEFAULT_STATE
          })
          this.props.onSuccess(json, this.props.history)
        }
      });
  }

  render() {
    const { submitLabel } = this.props;

    return (
      <div>
        <h1>{submitLabel}</h1>
        <ul>
          { this.state.errors.map((error) => <li>{ error }</li>) }
        </ul>
        <form onSubmit={this.handleSubmit}>
          {/*
            I'm breaking up my long JSX into multiple lines and keeping
            everything nicely indented in order to make it easier to
            glance at the code and look for bugs.
            The extra few seconds needed to make your code pretty is worth it.
          */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value={submitLabel} />
        </form>
      </div>
    )
  }
}
