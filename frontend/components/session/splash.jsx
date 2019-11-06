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
          <div>
            <span className="nav-logo">BREWER</span>
            <h3 className="nav-welcome">Welcome {this.props.currentUser.username}</h3>
          </div>

          <ul className="nav-index">
            <div className="nav-index-cities">
              <Link onClick={this.toggleHide} to="/">Cities▼</Link>
              <ul className="hidden">
                <li><Link to="/">LA</Link></li>
                <li><Link to="/">SF</Link></li>
              </ul>
            </div>

            <li><Link to="/">Guides</Link></li>
            <li><Link to="/">Maps</Link></li>
            <li><Link to="/">Breweries</Link></li>

            <div className="nav-index-more">
              <Link onClick={this.toggleHide} to="/">More▼</Link>
              <ul className="hidden">
                <li><Link to="/">1</Link></li>
                <li><Link to="/">2</Link></li>
              </ul>
            </div>
          </ul>
          
          <div className="nav-contact">
            <Link to="/">
              {/* <a className="fas fa-linkedin" ></a> */}
              [LinkedIn]</Link>
            <Link to="/">
              {/* <a className="" /> */}
              [GitHub]</Link>
            <Link to="/">
              {/* <a className="fas fa-envelope" /> */}
              [Email]</Link>
          </div>

          <div className="nav-user">
            <button className="input submit" onClick={this.handleClick}>Sign Out</button>
          </div>

          <Link to="/" className="nav-search"><button className="input submit">Search</button></Link>
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