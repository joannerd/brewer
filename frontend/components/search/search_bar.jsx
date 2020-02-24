import React, { useState, useEffect } from 'react';

const SearchBar = ({ fetchSearchBreweries, searchItems, history }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [breweryId, setBreweryId] = useState("");

  useEffect(() => {
    fetchSearchBreweries();
  }, [])

  const handleClick = e => {
    e.preventDefault();
    if (e.type === "submit")
      history.push(`/breweries/${breweryId}`)
  };

  const getSearchResults = e => {
    const search = e.target.value;
    if (e.target.value.length > 0) {
      let searchInputResults = searchItems.filter(brewery => {
        let potentialSearch = brewery.name.toLowerCase();
        let filter = search.toLowerCase();
        return potentialSearch.includes(filter);
      });
      setSearchResults(searchInputResults);
    } else {
      setSearchResults([]);
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
            getSearchResults(e);
          }}
          type="search"
          autoComplete="off"
          value={searchInput}
          onBlur={() => {
            setSearchInput("");
            setTimeout(() => setSearchResults([]), 100);
          }}
        />
      </form>
      {/* <ul onClick={e => history.push(`/breweries/${e.target.id}`)}> */}
      <ul onClick={e => history.push(`/breweries/${e.target.id}`)}>
        {searchResults.map((result, i) => (
          <li id={result.id} key={i} className="search">{result.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar;