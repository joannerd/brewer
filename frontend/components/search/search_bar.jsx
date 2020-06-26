import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchSearchEntities } from '../../actions/search_actions';

const SearchBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchItems = useSelector(state => state.entities.search);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [breweryId, setBreweryId] = useState(1);

  const loadBrewerySearch = () => dispatch(fetchSearchEntities());

  const handleSubmit = e => {
    e.preventDefault();
    if (e.type === 'submit') {
      history.push(`/breweries/${breweryId}`);
    }
  };

  const handleSearchListClick = e => {
    history.push(`/breweries/${e.target.id}`);
  };

  const getSearchResults = e => {
    const search = e.target.value;
    if (e.target.value.length > 0) {
      const searchInputResults = searchItems.filter(brewery => {
        const potentialSearch = brewery.name.toLowerCase();
        const filter = search.toLowerCase();
        return potentialSearch.includes(filter);
      });
      setSearchResults(searchInputResults);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-bar-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <i className="fa fa-search" />
        <input
          onClick={loadBrewerySearch}
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
            setSearchInput('');
            setTimeout(() => setSearchResults([]), 100);
          }}
        />
      </form>
      <ul onClick={handleSearchListClick}>
        {searchResults.map(result => (
          <li id={result.id} key={result.id} className="search">{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
