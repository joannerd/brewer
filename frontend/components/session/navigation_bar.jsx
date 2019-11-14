import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => this.props.history.push("/login"))
  }

  render() {
    if (this.props.currentUser === undefined) return null;

    const cursorStyle = {
      cursor: "not-allowed"
    }
    return (
      <nav className="nav-container">
        <div className="welcome">
          <Link className="nav-logo" to="/">BREWER</Link>
          <h3 className="nav-welcome">Welcome {this.props.currentUser.username}</h3>
        </div>

        <ul className="nav-index">
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/guides">Guides</Link></li>
          <li><Link to="/breweries">Breweries</Link></li>

          <div className="dropdown">
            <span><Link to="/cities">Cities</Link><i className="fa fa-angle-down"/></span>
            <div className="dropdown-content">
              <Link style={cursorStyle}>Asheville</Link>
              <Link style={cursorStyle}>Austin</Link>
              <Link to="/cities/3" >Boston</Link>
              <Link style={cursorStyle}>Cincinatti</Link>
              <Link style={cursorStyle}>Denver</Link>
              <Link style={cursorStyle}>Grand Rapids</Link>
              <Link style={cursorStyle}>Indianapolis</Link>
              <Link style={cursorStyle}>Kalamazoo</Link>
              <Link style={cursorStyle}>Portland</Link>
              <Link style={cursorStyle}>San Diego</Link>
              <Link to="/cities/11" >San Francisco</Link>
              <Link style={cursorStyle}>Seattle</Link>
            </div>
          </div>
        </ul>
        
        <div className="nav-contact">
          <a href="https://www.linkedin.com/in/xchenj/" className="fa fa-linkedin-square" target="_blank" alt="linkedin"/>
          <a href="https://www.slideshare.net/slideshow/embed_code/key/AyCH5FH6ZNA1Pb" className="fa fa-file-text" target="_blank" alt="resume"/>
          <a href="http://www.junnac.org/" className="fa fa-folder" target="_blank" alt="portfolio"/>
          <a href="https://github.com/junnac" className="fa fa-github" target="_blank" alt="github"/>
          <a href="mailto:x.chenj@gmail.com" className="fa fa-envelope" target="_blank" alt="email"/>
          <Link to="/search" className="fa fa-search"/>
        </div>
        
        <button className="input submit logout" onClick={this.handleClick}>Logout</button>

        {/* <SearchBar /> */}
      </nav>
    )
  }
}


export default NavBar;