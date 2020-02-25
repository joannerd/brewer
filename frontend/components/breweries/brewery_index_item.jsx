import React from 'react';
import { Link } from "react-router-dom";

const Brewery = ({ brewery }) => {
  const addressLink = brewery.address.split(" ").join("+");
  let websitePrint = brewery.website.replace("http://www.", "").replace("https://www.", "").replace("/", "");

  return (
    <>
      <h1>
        <Link to={`/breweries/${brewery.id}`}>{brewery.name}</Link>
      </h1>
      <h2>
        <a href={brewery.website} target="_blank">
          {websitePrint}
        </a>
        <br/>
        {brewery.address}
      </h2>
      <img src={brewery.photoUrl} className="brewery-photo" />
      <p>{brewery.description}</p>
      <br />
      <a
        href={`https://www.google.com/maps/place/${addressLink}/`}
        target="_blank"
      >
        <button className="gmap-link">Open in Google Maps</button>
      </a>
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