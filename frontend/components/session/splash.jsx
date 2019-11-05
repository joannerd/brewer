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
        <div className="greeting loggedin">
          <h1>Welcome {this.props.currentUser.username}</h1>
          <button onClick={this.handleClick}>Sign Out</button>
        </div>
      )
    } else {
      return (
        <div className="greeting loggedout">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    };
  }
}


export default Splash;