import React from 'react';
import { Link } from 'react-router-dom';

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
    // if (this.props.currentUser === undefined) return null;
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
              <Link to="/cities/" >Asheville</Link>
              <Link to="/cities/" >Austin</Link>
              <Link to="/cities/" >Boston</Link>
              <Link to="/cities/" >Cincinatti</Link>
              <Link to="/cities/" >Denver</Link>
              <Link to="/cities/" >Grand Rapids</Link>
              <Link to="/cities/" >Indianapolis</Link>
              <Link to="/cities/" >Kalamazoo</Link>
              <Link to="/cities/" >Portland</Link>
              <Link to="/cities/" >San Diego</Link>
              <Link to="/cities/" >San Francisco</Link>
              <Link to="/cities/" >Seattle</Link>
            </div>
          </div>
        </ul>
        
        <div className="nav-contact">
          <a href="https://www.linkedin.com/in/xchenj/" className="fa fa-linkedin-square" target="_blank" alt="linkedin"/>
          <a href="https://www.slideshare.net/slideshow/embed_code/key/AyCH5FH6ZNA1Pb" className="fa fa-file-text" target="_blank" alt="resume"/>
          <a href="http://www.junnac.org/" className="fa fa-folder" target="_blank" alt="portfolio"/>
          <a href="https://github.com/junnac" className="fa fa-github" target="_blank" alt="github"/>
          <a href="mailto:x.chenj@gmail.com" className="fa fa-envelope" target="_blank" alt="email"/>
          <a href="/" className="fa fa-search"/>
        </div>
        
        <button className="input submit logout" onClick={this.handleClick}>Logout</button>
      </nav>
    )
  }
}


export default NavBar;