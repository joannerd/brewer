import React, { useState, useEffect } from 'react';

const SearchBar = props => {
  const [searchInput, setSearchInput] = useState('');

  function handleClick(e) {
    e.preventDefault();
    alert('clicked!')
  }

  function handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleClick(e);
    }
  }

  useEffect(() => {
    document.querySelector('.fa-search').addEventListener("click", (e) => handleClick(e))
  }, [])

  return (
    <div className="search-bar-container">
      <form className="search-form" onSubmit={handleClick}>
        <input
          className="search-form-input"
          placeholder="Search for brewery"
          onChange={e => setSearchInput(e.target.value)}
          type="search"
          autoComplete="off" 
          value={searchInput}
        />
        <i className="fa fa-search" />
        <input
          className="search-form-submit"
          onKeyDown={handleEnter}
          type="submit"
        />
      </form>
    </div>
  )
}

export default SearchBar;