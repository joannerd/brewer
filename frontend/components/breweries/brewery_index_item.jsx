import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brewery = ({ brewery, isCurrentUserFavorite, toggleFavorite }) => {
  const {
    id,
    name,
    address,
    description,
    website,
    photoUrl,
  } = brewery;
  const addressLink = address.split(' ').join('+');
  const favoriteButton = isCurrentUserFavorite !== undefined
    ? (
      <i className="fa fa-star"
        id={isCurrentUserFavorite ? 'star' : 'black-star'}
        onClick={toggleFavorite}
      />
    ) : null;

  return (
    <>
      <h1>
        <Link to={`/breweries/${id}`}>{name}</Link>
        &nbsp;&nbsp;
        {favoriteButton}
      </h1>
      <h2>{address}</h2>
      <img alt={name} src={photoUrl} className="brewery-photo" />
      <p>{description}</p>
      <br />
      <a
        href={`https://www.google.com/maps/place/${addressLink}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="gmap-link">Open in Google Maps</button>
      </a>
      <br />
      <a href={website} target="_blank" rel="noopener noreferrer">
        <button type="button" className="gmap-link">Website</button>
      </a>
    </>
  );
};

Brewery.propTypes = {
  brewery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
  }).isRequired,
  isCurrentUserFavorite: PropTypes.bool,
  toggleFavorite: PropTypes.func,
};

Brewery.defaultProps = {
  isCurrentUserFavorite: undefined,
  toggleFavorite: undefined,
};

export default Brewery;
