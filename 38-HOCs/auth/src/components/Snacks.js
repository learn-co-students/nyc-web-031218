import React, { Component } from 'react';

export default class Snacks extends Component {
  state = {
    snacks: [],
  }

  componentDidMount() {
    this.getSnacks();
  }

  /*
    See the node in App.js above login().
    We aren't handling the use case of a bad/expired JWT.
    What would you do here?
  */
  getSnacks = () => {
    if (localStorage.getItem('token')) {
      // Let's display all of the user's snacks.
      // This was our route:
      // get '/users/:user_id/snacks', to: 'users#users_snacks'
      fetch(`http://localhost:3000/users/${localStorage.getItem('user_id')}/snacks`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token'),
          }
        }
      )
      .then(res => res.json())
      .then(json => {
        this.setState({
          snacks: json,
        });
      });
    } else {
      // Let's go to the login page if there's no JWT.
      console.log(this.props)
      this.props.history.push("/login");
    }
  }

  renderSnacks = () => {
    return this.state.snacks.map(snack => {
      return <li>{snack.name}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderSnacks() }
        </ul>
      </div>
    )
  }
}
