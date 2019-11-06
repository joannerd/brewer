import React from 'react';
import { Link } from 'react-router-dom';
import { isNullOrUndefined } from 'util';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
    // this.rehide = this.rehide.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => ownProps.history.push("/"))
  }

  toggleHide(e) {
    const target = e.currentTarget.nextElementSibling

    if (target.className === "hidden") {
      target.className = "";
    } else {
      target.className = "hidden";
    }

    $(e.target.parentElement).off('click', toggleHide);
    $(document).on('click', toggleHide);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <nav>
          <div className="nav-logo">BREWER</div>

          <ul className="nav-index">
            <div className="nav-index-cities">
              <Link onClick={this.toggleHide} to="/">Cities ▼</Link>
              <ul className="hidden">
                <li><Link to="/">LA</Link></li>
                <li><Link to="/">SF</Link></li>
              </ul>
            </div>

            <li><Link to="/">Guides</Link></li>
            <li><Link to="/">Maps</Link></li>
            <li><Link to="/">Breweries</Link></li>

            <li className="nav-index-more">
              <Link onClick={this.toggleHide} to="/">More ▼</Link>
              <ul className="hidden">
                <li><Link to="/">1</Link></li>
                <li><Link to="/">2</Link></li>
              </ul>
            </li>
          </ul>
          
          <ul className="nav-contact">
            <li><Link to="/">[TW]</Link></li>
            <li><Link to="/">[FB]</Link></li>
            <li><Link to="/">[YT]</Link></li>
            <li><Link to="/">[IG]</Link></li>
          </ul>

          <div className="nav-user">
            Welcome {this.props.currentUser.username}<br />
            <button onClick={this.handleClick}>Sign Out</button>
          </div>

          <button>
            <Link to="/" className="nav-search">Search</Link>
          </button>
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