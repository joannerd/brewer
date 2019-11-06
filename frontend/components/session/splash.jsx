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
              <span onMouseOver={this.unhide} onMouseOut={this.rehide} to="/">Cities 
              <i className="fa fa-angle-down" /></span>
              <ul className="hidden">
                <li><Link to="/" target="_blank" >LA</Link></li>
                <li><Link to="/" target="_blank" >SF</Link></li>
              </ul>
            </div>

            <li><Link to="/" target="_blank" >Guides</Link></li>
            <li><Link to="/" target="_blank" >Maps</Link></li>
            <li><Link to="/" target="_blank" >Breweries</Link></li>

            <div className="nav-index-more">
              <span onMouseOver={this.unhide} onMouseOut={this.rehide} to="/">More 
              <i className="fa fa-angle-down" /></span>
              <ul className="hidden">
                <li><Link to="/" target="_blank" >1</Link></li>
                <li><Link to="/" target="_blank" >2</Link></li>
              </ul>
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