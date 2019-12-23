import React from 'react';

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
        <form className="search-form" onSubmit={this.handleClick}>
          <input
            className="search-form-input"
            placeholder="Find brewery"
            onChange={this.update("searchInput")}
            type="search"
            autoComplete="off" 
            value={this.state.searchInput}
          />

          <i className="fa fa-search" />
          <input
            className="search-form-submit"
            onKeyDown={this.handleEnter}
            type="submit"
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;