import React, { Component } from 'react';
import '../assets/css/UserForm.css';

/*
  We probably wouldn't make this a generic form for both login and registration.
  Some common reasons why:
  - registration forms would probably have a lot more fields
  - how we display error messages will probably be different
*/
export default class UserForm extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props);
    // history and history.push, as well as a bunch of other stuff,
    // are coming from our router props that we're spreading into the
    // component.
    // The push() method will be passed into our onSubmit so it can be
    // called later after a successful submit.
    this.props.onSubmit(this.state.username, this.state.password, this.props.history.push);
  }

  render() {
    const { submitLabel } = this.props;

    return (
      <div>
        <h1>{submitLabel}</h1>
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
