import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/App.css';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Profile from '../components/Profile';
import BoardGameContainer from '../containers/BoardGameContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { this.props.isLoggedIn ?
            <React.Fragment>
              <Profile id={this.props.id} token={this.props.token} />
              <BoardGameContainer />
            </React.Fragment>
          :
            <LoginForm />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.auth.token,
    id: state.auth.id,
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(App);
