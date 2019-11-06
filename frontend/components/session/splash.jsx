import React from 'react';
import { Link } from 'react-router-dom';
import { isNullOrUndefined } from 'util';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.unhide = this.unhide.bind(this);
    this.rehide = this.rehide.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => ownProps.history.push("/"))
  }

  unhide(e) {
    e.currentTarget.nextElementSibling.className = "not-hidden";
  }

  rehide(e) {
    e.currentTarget.nextElementSibling.className = "hidden";
  }

  render() {
    if (this.props.currentUser) {
      return (
        <nav>
          <div>
            <span className="nav-logo">BREWER</span>
            <h3 className="nav-welcome">Welcome {this.props.currentUser.username}</h3>
          </div>

          <ul className="nav-index">
            <div className="nav-index-cities">
              <span onMouseOver={this.unhide} onMouseOut={this.rehide} to="/">Cities▼</span>
              <ul className="hidden">
                <li><Link to="/">LA</Link></li>
                <li><Link to="/">SF</Link></li>
              </ul>
            </div>

            <li><Link to="/">Guides</Link></li>
            <li><Link to="/">Maps</Link></li>
            <li><Link to="/">Breweries</Link></li>

            <div className="nav-index-more">
              <span onMouseOver={this.unhide} onMouseOut={this.rehide} to="/">More▼</span>
              <ul className="hidden">
                <li><Link to="/">1</Link></li>
                <li><Link to="/">2</Link></li>
              </ul>
            </div>
          </ul>
          
          <div className="nav-contact">
            <a href="https://www.linkedin.com/in/xchenj/" className="fa fa-linkedin-square" alt="linkedin"/>
            <a href="https://www.slideshare.net/slideshow/embed_code/key/AyCH5FH6ZNA1Pb" className="fa fa-file-text" alt="resume"/>
            <a href="http://www.junnac.org/" className="fa fa-folder" alt="portfolio"/>
            <a href="https://github.com/junnac" className="fa fa-github" alt="github"/>
            <a href="mailto:x.chenj@gmail.com" className="fa fa-envelope" alt="email"/>
          </div>

          <div className="nav-user">
            <button className="input submit" onClick={this.handleClick}>Log Out</button>
          </div>

          <a href="/" className="fa fa-search"/>
        </nav>
      )
    } else {
      return (
        <div className="nav-bar">
          <button>
            <Link to="/signup" className="not-logged">Sign Up</Link>
          </button>
          <button>
            <Link to="/login" className="not-logged">Log In</Link>
          </button>
        </div>
      );
    };
  }
}


export default Splash;