import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';

const NavBar = ({ logout, currentUser }) => {
  if (currentUser === undefined) return null;

  return (
    <nav className="nav-container">
      <div className="welcome">
        <Link className="nav-logo" to="/">
          BREWER
        </Link>
        <h3 className="nav-welcome">Welcome {currentUser.username}</h3>
      </div>

      <ul className="nav-index">
        <li>
          <Link to={`/users/${currentUser.id}`}>Profile</Link>
        </li>

        <div className="dropdown">
          <Link to="/guides">Guides</Link>
          <div className="dropdown-content">
            <Link to="/guides">All</Link>
            <Link to="/guides/new">Create</Link>
          </div>
        </div>

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

      <SearchBar />
      
      <div className="nav-contact">
        <a
          href="http://www.junnac.org/"
          className="fa fa-folder"
          target="_blank"
          alt="portfolio"
        />
        <a
          href="https://www.linkedin.com/in/xchenj/"
          className="fa fa-linkedin-square"
          target="_blank"
          alt="linkedin"
        />
        <a
          href="https://github.com/junnac"
          className="fa fa-github"
          target="_blank"
          alt="github"
        />
        <a
          href="https://angel.co/xchenj"
          className="fa fa-angellist"
          target="_blank"
          alt="angellist"
        />
        <a
          href="mailto:x.chenj@gmail.com"
          className="fa fa-envelope"
          target="_blank"
          alt="email"
        />
      </div>

      <button className="input submit logout" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}


export default NavBar;