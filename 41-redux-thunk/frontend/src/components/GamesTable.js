import React from 'react';
import { connect } from 'react-redux';
import Game from './Game';

const GamesTable = (props) => {
  return (
    <table className="games">
      <tbody>
        <tr>
          <th>
            <h3 className="">Name</h3>
          </th>
          <th>
            <h3 className="">Genre</h3>
          </th>
        </tr>
      </tbody>
      {
        props.games.map(game => {
          return <Game key={game.id} name={game.name} genre={game.genre.name} />
        })
      }
    </table>
  )
}

const mapStateToProps = (state) => {
  return {
    games: state.boardgames.games
  }
}

export default connect(mapStateToProps)(GamesTable);
