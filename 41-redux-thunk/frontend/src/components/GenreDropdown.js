import React from 'react';

const GenreDropdown = ({ genres, currentGenre, handleDropdown }) => {
  return (
    <select className="dropdown" value={currentGenre.id} onChange={handleDropdown}>
      {genres.map((genre) => {
        return (
          <option
            key={genre.id}
            className=""
            data-value={genre.id}
            value={genre.id}
          >
            {genre.name}
          </option>
        );
      })}
    </select>
  )
}

export default GenreDropdown;
