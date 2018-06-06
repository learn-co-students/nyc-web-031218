import React, { Component } from 'react';
import GamesTable from '../components/GamesTable';
import GameForm from '../components/GameForm';

const API = 'http://localhost:5000';

class BoardGameContainer extends Component {
  render() {
    return (
      <div className="game-container">
        <GameForm />
        <GamesTable />
      </div>
    )
  }
}

export default BoardGameContainer;
