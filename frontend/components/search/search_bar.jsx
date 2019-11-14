import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      searchResults: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.update = this.update.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    alert('clicked!')

    
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleClick(e);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }


  render() {
    return (
      <div className="search-bar-container">
        <form className="search-form">
          <input
            className="search-form-input"
            onChange={this.update("searchInput")}
            type="search"
            name="searchInput" 
            value={this.state.searchInput}
          />
          <input
            className="search-form-submit"
            onClick={this.handleClick}
            onKeyDown={this.handleEnter}
            type="submit"
            value="Search"
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;