import React from 'react';
import { Link } from 'react-router-dom';
import { isNullOrUndefined } from 'util';

const Splash = (props) => {
  if (isNullOrUndefined(props.currentUser)) {
    return (
      <div className="greeting loggedin">
        <h1>Welcome {props.currentUser.username}</h1>
        <button onClick={props.logout}>Sign Out</button>
      </div>
    )
  } else {

    return (
      <div className="greeting loggedout">
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/login">Log In</Link>
      </div>
    );
  };
}

export default Splash;