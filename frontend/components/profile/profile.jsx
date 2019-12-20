import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ match, user, userGuides, fetchUser }) => {
  useEffect(() => {
    fetchUser(match.params.userId);
  }, [match.params.userId])

  const breweries = (userFavBrews.length === 0) ?
    <h2>No favorite breweries yet.</h2> :
    // userFavBrews
    <h2>hello</h2>
  return (
    <div className="profile">
      <span>
        <div>
          <h1>{user.username}</h1>
          <img src="" />
        </div>

        <div>
          <h2>Guides</h2>
          {userGuides.map((guide, i) => (
            <Link
              to={`/guides/${guide.id}`}
              className="guide-preview"
              key={i}>
              <h3>{guide.title}</h3>
            </Link>
          ))}
        </div>
      </span>
      <div className="user-breweries">
        <h2>Favorite Breweries</h2>
      </div>
    </div>
  )
}

export default Profile;