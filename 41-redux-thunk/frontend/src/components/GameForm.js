import React, { Component } from 'react';
import { connect } from 'react-redux';

import GenreDropdown from './GenreDropdown';

class GameForm extends Component {
  state = {
    name: "",
    genre: {
      id: "",
      name: "",
    }
  }

  selectGenre = (event) => {
    const genre = this.props.genres.find(genre => genre.id == event.target.value);
    this.setState({ genre });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addGame = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <div className="gameform">
        <form className="create" onSubmit={this.addGame}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <GenreDropdown
            genres={this.props.genres}
            currentGenre={this.state.genre}
            handleDropdown={this.selectGenre}
          />
          <input type="submit" value="Add Game" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.boardgames.genres
  }
}

export default connect(mapStateToProps)(GameForm);
