import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.entities.users[match.params.userId]);
  const userGuides = useSelector(state => Object.values(state.entities.guides));
  const userFavBrews = useSelector(state => Object.values(state.entities.breweries));

  useEffect(() => {
    dispatch(fetchUser(match.params.userId));
  }, [match.params.userId]);

  const breweries = userFavBrews.length === 0 ? (
    <h4>No favorite breweries yet.</h4>
  ) : (
    <ul>
      {userFavBrews.map(brewery => (
        <a
          key={brewery.id}
          href={brewery.website}
          target="_blank"
          rel="noreferrer"
        >
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
          <img src="/beer.svg" alt="" id="profile-pic" />
        </div>

        <div>
          <h2>
            <i className="fa fa-list-ol" />
            Guides
          </h2>
          {userGuides.map(guide => (
            <Link
              to={`/guides/${guide.id}`}
              className="guide-preview"
              key={guide.id}
            >
              <h3>{guide.title}</h3>
            </Link>
          ))}
        </div>
      </span>
      <div className="user-breweries">
        <h2>
          <i className="fa fa-star" />
          Favorite Breweries
        </h2>
        {breweries}
      </div>
    </div>
  );
};

Profile.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Profile;
