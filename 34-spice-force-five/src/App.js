import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NotFound from './NotFound.js'

import SpiceGirl from "./spice-girls/SpiceGirl"
import Home from "./Home"

import { Route, Link, NavLink, Switch } from 'react-router-dom'

export default class App extends Component {

  renderSpice = (renderProps) => {
    const spiceId = renderProps.match.params.spiceId
    const spiceGirl = this.state.spiceGirls.find((spice) => spice.id == spiceId)
    if (spiceGirl)
      return <SpiceGirl adjective={ spiceGirl.adjective} gif={ spiceGirl.gif} />
    else
      return (<NotFound />)
  }

  render() {

    const spiceLinks = this.state.spiceGirls.map((spice) => 
      <NavLink activeClassName="active" to={ "/spice/" + spice.id }>
        { spice.adjective }
      </NavLink>
      )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Spice Force Five</h1>
          <aside className="sidebar">
            <ul>
              <li>
              { spiceLinks }
              </li>
            </ul>
          </aside>
        </header>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/spice/:spiceId" exact render={ this.renderSpice } />

          <Route render={ (renderProps) => {
            console.log(renderProps)
           return (<span>NOT FOUND</span>)
         }
       }
          /> 
        </Switch>
      </div>
    );
  }

   state = {
    spiceGirls: [
      {
        id: 1,
        adjective: "Scary",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        slug: "mel-b",
      },
      {
        id: 2,
        adjective: "Baby",
        gif: "https://media.giphy.com/media/PSfMwrLPXUtrO/giphy.gif",
        slug: "emma-b",
      },
      {
        id: 3,
        adjective: "Ginger",
        gif: "https://media.giphy.com/media/ZA1X3mZigRMoo/giphy.gif",
        slug: "geri-h",
      },
      {
        id: 4,
        adjective: "Posh",
        gif: "https://media.giphy.com/media/f4X5yhZlnZXLa/giphy.gif",
        slug: "victoria-b",
      },
      {
        id: 5,
        adjective: "Sporty",
        gif: "https://media.giphy.com/media/ag5PDZoSMrFuM/giphy.gif",
        slug: "mel-c",
      },
    ]
  }

}

