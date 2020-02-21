import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ fetchBreweries, breweries }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleClick = e => {
    e.preventDefault();
    getSearchResults();
  };

  const handleEnter = e => {
    if (e.keyCode === 13) {
      this.handleClick(e);
    }
  };

  const clearSearchInput = () => {
    setSearchInput('');
    setSearchResults([]);
  };

  const getSearchResults = e => {
    const search = e.target.value;
    if (e.target.value.length > 0) {
      let searchInputResults = breweries.filter(brewery => {
        let potentialSearch = brewery.name.toLowerCase();
        let filter = search.toLowerCase();
        return potentialSearch.includes(filter);
      });
      setSearchResults(searchInputResults);
    } else {
      clearSearchInput();
    }
  };

  useEffect(() => {
    fetchBreweries();
  }, [])

  return (
    <div className="search-bar-container">
      <form className="search-form" onSubmit={handleClick}>
        <i className="fa fa-search" />
        <input
          className="search-form-input"
          placeholder="Search for brewery"
          onChange={e => {
            setSearchInput(e.target.value);
            getSearchResults(e)
          }}
          onFocus={getSearchResults}
          type="search"
          autoComplete="off"
          value={searchInput}
        />
      </form>
      <ul>
        {searchResults.map((result, i) => (
          <li key={i} className="search">{result.name}</li>
        ))}
      </ul>
      <input
        className="search-form-submit"
        onKeyDown={handleEnter}
        type="submit"
      />
    </div>
  )
}

export default SearchBar;