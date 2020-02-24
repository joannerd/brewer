import React, { useState, useEffect } from 'react';

const Brewery = ({ brewery }) => {
  const addressLink = brewery.address.split(" ").join("+");

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