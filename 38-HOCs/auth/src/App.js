import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/UserForm';
import Snacks from './components/Snacks';

import withBorder from './components/withBorder';
import withAuth from './components/withAuth';

const WrappedSnacks = withBorder(Snacks)

const WrappedUserForm = withBorder(UserForm)

const SnacksWithRouterAndAuth = withRouter(withAuth(Snacks))


class App extends Component {
  /*
    In our fetch here and in Snacks, we aren't handling some use cases:
      - incorrect username/password
      - bad or expired JWT
    Can you think of a way to check the response?
    How would you handle these two use cases for a good UX?
  */

  authSuccess = (json, history) => {
    localStorage.setItem('token', json.token);
    localStorage.setItem('user_id', json.user_id);
    localStorage.setItem('username', json.username);
    history.push("/snacks")
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
          <Route path="/login" render={(props) => <WrappedUserForm submitLabel="Login" url="http://localhost:3000/sessions" onSuccess={this.authSuccess} {...props} />} />
          <Route path="/register" render={(props) => <WrappedUserForm submitLabel="Register" url="http://localhost:3000/users" onSuccess={this.authSuccess} {...props} />} />

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
            <Route path="/mysnacks" render={(props) => <WrappedSnacks foo="baz" {...props} /> } />
          }

          <SnacksWithRouterAndAuth />
          {/* Redirect is a component from react-router-dom that let's us redirect. */}
        </div>
      </Router>
    );
  }
}

export default App;
