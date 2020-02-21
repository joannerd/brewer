import React, { useState, useEffect } from 'react';

const SearchBar = ({ fetchBreweries, breweries }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchBreweries();
  }, [])

  const handleClick = e => {
    e.preventDefault();
    if (e.type === 'submit' || e.keyCode === 13)
      alert('clicked')
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
    </div>
  )
}

export default SearchBar;