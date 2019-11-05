import React from 'react';
import { Link } from 'react-router-dom';
import { isNullOrUndefined } from 'util';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => ownProps.history.push("/"))
  }

  render() {
    if (this.props.currentUser) {
      return (
        <nav>
          <div className="nav-logo">BREWER</div>

          <ul className="nav-index">
            <li><Link to="/">Cities ▼</Link>
              <li><Link to="/">LA</Link></li>
              <li><Link to="/">SF</Link></li>
            </li>

            <li><Link to="/">Guides</Link></li>
            <li><Link to="/">Maps</Link></li>
            <li><Link to="/">Breweries</Link></li>
            <li><Link to="/">More ▼</Link>
              <li><Link to="/">1</Link></li>
              <li><Link to="/">2</Link></li>
            </li>
          </ul>
          
          <ul className="nav-contact">
            <li><Link to="/">[TW]</Link></li>
            <li><Link to="/">[FB]</Link></li>
            <li><Link to="/">[YT]</Link></li>
            <li><Link to="/">[IG]</Link></li>
          </ul>

          <div className="nav-user">
            Welcome {this.props.currentUser.username}<br/>
            <button onClick={this.handleClick}>Sign Out</button>
          </div>
        </nav>
      )
    } else {
      return (
        <div className="nav-bar">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    };
  }
}


export default Splash;