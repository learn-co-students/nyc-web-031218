import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/UserForm';
import Snacks from './components/Snacks';

class App extends Component {
  /*
    In our fetch here and in Snacks, we aren't handling some use cases:
      - incorrect username/password
      - bad or expired JWT
    Can you think of a way to check the response?
    How would you handle these two use cases for a good UX?
  */
  login = (username, password, callback) => {
    fetch('http://localhost:5000/sessions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ username, password })})
      .then(res => res.json())
      .then(json => {
        /*
          We could have put this in state. What issues are there?
            - Hint: page refresh
          However, placing user_id and username in localstorage
          might also not be ideal? Why?
            - Hint: what if users change their username?
          What might be a solution for this?
            - Hint: don't limit yourself to just thinking frontend
        */
        localStorage.setItem('token', json.token);
        localStorage.setItem('user_id', json.user_id);
        localStorage.setItem('username', json.username);

        callback("/snacks");
      });
  }

  register = (event) => {
    event.preventDefault();
    // TODO: let's write this
    //       what do we get back from the API?
    //       can we refactor register + login to be more DRY?
  }

  // TODO: Add a logout button somewhere and call this.
  logout = () => {
    // You'll want to use:
    //   localStorage.removeItem('key')
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/* Notice how we're passing down our router props with the spread operator. */}
          <Route path="/login" render={(props) => <UserForm submitLabel="Login" onSubmit={this.login} {...props} />} />
          <Route path="/register" render={(props) => <UserForm submitLabel="Register" onSubmit={this.register} {...props} />} />

          {/* FYI, this is how you can make a comment in React JSX */}
          {/*
            _Things to Think About_

            We're protecting our /mysnacks route using a very simple method.
            There are more robust and DRY ways to handle this which we will
            get to when we learn about HOC (higher order components).

            Style-wise, we're using localStorage in a not so pretty way.
            It's acting like an interface. How could we handle this better?
          */}
          {
            localStorage.getItem('token') ?
              <Route path="/mysnacks" render={(props) => <Snacks {...props} />} />
            :
              <Redirect to="/register" />
          }
          {/* Redirect is a component from react-router-dom that let's us redirect. */}
        </div>
      </Router>
    );
  }
}

export default App;
