import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchCities();
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
              {this.props.cities.map((city, i) => (
                <Link to={`/cities/${city.id}`} key={i}>{city.name}</Link>
              ))}
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