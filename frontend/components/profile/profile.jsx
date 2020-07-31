import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import Loading from '../loading';

const Profile = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const profileUser = useSelector(state => {
    const user = state.entities.users[userId];
    user.guides = Object.values(state.entities.guides)
      .map(({ id, title }) => ({ id, title }));
    user.breweries = Object.values(state.entities.favorites)
      .map(({ id, name }) => ({ id, name }));
    return user;
  });

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [userId]);

  if (!profileUser) return <Loading />;

  const { username, breweries, guides } = profileUser;

  const profileBreweries = !breweries ? (
    <h4>No favorite breweries yet.</h4>
  ) : (
    <ul>
      {breweries.map(brewery => (
        <Link
          key={brewery.id}
          to={`/breweries/${brewery.id}`}
        >
          {brewery.name}
        </Link>
      ))}
    </ul>
  );

  return (
    <div className="profile">
      <span>
        <div>
          <h1>{username}</h1>
          <img src="/beer.svg" alt="" id="profile-pic" />
        </div>

        <div>
          <h2>
            <i className="fa fa-list-ol" />
            Guides
          </h2>
          {guides.map(guide => (
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
        {profileBreweries}
      </div>
    </div>
  );
};

export default Profile;
