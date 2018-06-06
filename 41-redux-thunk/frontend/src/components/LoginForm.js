import React, { Component } from 'react';
import { connect, getStore } from 'react-redux';
import { test, login } from '../actions';

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(test("Hello from LoginForm"));

    this.props.dispatch(login(this.state.username, this.state.password))
      .then(() => console.log('in then'))
    // fetch(`http://localhost:5000/users?username=${this.state.username}&password=${this.state.password}`)
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log(json[0])
    //     this.props.dispatch(login(json[0]))
    //   }).then(() => {
    //     console.log(this.props);
    //   })
  }

  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(LoginForm);
