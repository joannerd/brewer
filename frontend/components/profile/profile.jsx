import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ match, user, userGuides, fetchUser, userFavBrews }) => {
  useEffect(() => {
    fetchUser(match.params.userId);
  }, [match.params.userId]);

  const breweries =
    userFavBrews.length === 0 ? (
      <h4>No favorite breweries yet.</h4>
    ) : (
      <ul>
        {userFavBrews.map((brewery, i) => (
          <a key={i} href={brewery.website} target="_blank">
            {brewery.name}
          </a>
        ))}
      </ul>
    );
  return (
    <div className="profile">
      <span>
        <div>
          <h1>{user.username}</h1>
          <img src="/beer.svg" alt="" id="profile-pic"/>
        </div>

        <div>
          <h2><i className="fa fa-list-ol"/>Guides</h2>
          {userGuides.map((guide, i) => (
            <Link to={`/guides/${guide.id}`} className="guide-preview" key={i}>
              <h3>{guide.title}</h3>
            </Link>
          ))}
        </div>
      </span>
      <div className="user-breweries">
        <h2><i className="fa fa-star" /> Favorite Breweries</h2>
        {breweries}
      </div>
    </div>
  );
};

export default Profile;