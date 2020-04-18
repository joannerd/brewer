import React from 'react';
import { Link } from 'react-router-dom';

const Brewery = ({ brewery }) => {
  const addressLink = brewery.address.split(' ').join('+');

  return (
    <>
      <h1>
        <Link to={`/breweries/${brewery.id}`}>{brewery.name}</Link>
      </h1>
      <h2>
        {brewery.address}
      </h2>
      <img alt="brewery" src={brewery.photoUrl} className="brewery-photo" />
      <p>{brewery.description}</p>
      <br />
      <a
        href={`https://www.google.com/maps/place/${addressLink}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="gmap-link">Open in Google Maps</button>
      </a>
      <br />
      <a href={brewery.website} target="_blank" rel="noopener noreferrer">
        <button type="button" className="gmap-link">Website</button>
      </a>
    </>
  );
};

Brewery.defaultProps = {
  brewery: {
    id: '',
    address: '',
  },
};

export default Brewery;
