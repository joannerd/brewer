import React, { useState, useEffect } from 'react';
import { fetchYelp } from '../../util/yelp_api_util';

const Brewery = ({ brewery }) => {
  const addressLink = brewery.address.split(" ").join("+");
  const [yelp, setYelp] = useState({});

  useEffect(() => {
    fetchYelp(brewery.name, brewery.address).then(res => console.log(res));
    console.log('hi')
  }, [brewery]);

  return (
    <>
      <h1>
        <a href={brewery.website} target="_blank">
          {brewery.name}
        </a>
      </h1>
      <h2>
        {brewery.address}
      </h2>
      <img src={brewery.photoUrl} className="brewery-photo" />
      <p>{brewery.description}</p>
      <a href={`https://www.google.com/maps/place/${addressLink}/`} target="_blank"><button className="gmap-link">
        Open in Google Maps
      </button></a>
    </>
  );
}

Brewery.defaultProps = {
  brewery: {
    id: '',
    address: ''
  }
};

export default Brewery;