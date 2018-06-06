import React, { Component } from 'react';

const NameFilter = () => {
  return (
    <div className="filter">
      <form className="search">
        <label>
          Name Filter:
          <input
            type="text"
            name="name"
            placeholder="Filter board games by name"
          />
        </label>
        <input type="submit" value="Filter" />
      </form>
    </div>
  )
}

export default NameFilter;
