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
      <nav className="center">
        <div className="welcome">
          <span className="nav-logo">BREWER</span>
          <h3 className="nav-welcome">Welcome {this.props.currentUser.username}</h3>
        </div>

        <ul className="nav-index">

          <div className="dropdown">
            <span>Cities<i className="fa fa-angle-down"/></span>
            <div className="dropdown-content">
              <Link to="/" target="_blank" >LA</Link>
              <Link to="/" target="_blank" >SF</Link>
            </div>
          </div>

          <li><Link to="/" target="_blank" >Guides</Link></li>
          <li><Link to="/" target="_blank" >Maps</Link></li>
          <li><Link to="/" target="_blank" >Breweries</Link></li>

          <div className="dropdown">
            <span>More<i className="fa fa-angle-down"/></span>
            <div className="dropdown-content">
              <Link to="/" target="_blank" >1</Link>
              <Link to="/" target="_blank" >2</Link>
            </div>
          </div>
        </ul>
        
        <div className="nav-contact">
          <a href="https://www.linkedin.com/in/xchenj/" className="fa fa-linkedin-square" target="_blank" alt="linkedin"/>
          <a href="https://www.slideshare.net/slideshow/embed_code/key/AyCH5FH6ZNA1Pb" className="fa fa-file-text" target="_blank" alt="resume"/>
          <a href="http://www.junnac.org/" className="fa fa-folder" target="_blank" alt="portfolio"/>
          <a href="https://github.com/junnac" className="fa fa-github" target="_blank" alt="github"/>
          <a href="mailto:x.chenj@gmail.com" className="fa fa-envelope" target="_blank" alt="email"/>
        </div>

        <a href="/" className="fa fa-search"/>
        <button className="input submit logout" onClick={this.handleClick}>Logout</button>
      </nav>
    )
  }
}


export default NavBar;