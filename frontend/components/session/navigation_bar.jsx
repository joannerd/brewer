import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import SearchBar from '../search/search_bar';
import Loading from '../loading';

const NavBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.entities.users[state.session.id]);
  if (currentUser === undefined) return <Loading />;

  const handleLogout = () => dispatch(logout());

  return (
    <nav className="nav-container">
      <div className="welcome">
        <Link className="nav-logo" to="/">
          BREWER
        </Link>
        <h3 className="nav-welcome">
          Welcome
          {currentUser.username}
        </h3>
      </div>

      <ul className="nav-index">
        <li>
          <Link to={`/users/${currentUser.id}`}>Profile</Link>
        </li>

        <li className="dropdown">
          <Link to="/guides">Guides</Link>
        </li>

        <li>
          <Link to="/forum">Forum</Link>
        </li>

        {/* <div className="dropdown">
          <Link to="/guides">Guides</Link>
          <div className="dropdown-content">
            <Link to="/guides">All</Link>
            <Link to="/guides/new">Create</Link>
          </div>
        </div> */}

        <li>
          <Link to="/breweries">Breweries</Link>
        </li>

        <div className="dropdown">
          <span>
            <Link to="/cities">Cities</Link>
          </span>
          <div className="dropdown-content">
            <Link to="/cities/1">Asheville</Link>
            <Link to="/cities/2">Austin</Link>
            <Link to="/cities/3">Boston</Link>
            <Link to="/cities/4">Cincinatti</Link>
            <Link to="/cities/5">Denver</Link>
            <Link to="/cities/6">Grand Rapids</Link>
            <Link to="/cities/7">Indianapolis</Link>
            <Link to="/cities/8">Kalamazoo</Link>
            <Link to="/cities/9">Portland</Link>
            <Link to="/cities/10">San Diego</Link>
            <Link to="/cities/11">San Francisco</Link>
            <Link to="/cities/12">Seattle</Link>
          </div>
        </div>
      </ul>

      <div className="nav-contact">
        <a
          href="https://junnac.com/"
          className="fa fa-folder"
          target="_blank"
          alt="portfolio"
          rel="noopener noreferrer"
        >
          {null}
        </a>
        <a
          href="https://www.linkedin.com/in/xchenj/"
          className="fa fa-linkedin-square"
          target="_blank"
          alt="linkedin"
          rel="noopener noreferrer"
        >
          {null}
        </a>
        <a
          href="mailto:x.chenj@gmail.com"
          className="fa fa-envelope"
          target="_blank"
          alt="email"
          rel="noopener noreferrer"
        >
          {null}
        </a>
      </div>

      <SearchBar />

      <button
        type="button"
        className="input submit logout"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
