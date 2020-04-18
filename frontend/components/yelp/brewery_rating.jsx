import React from 'react';

const BreweryRating = ({ rating, reviewCount, url }) => (
  <>
    <h3>
      {reviewCount}
      reviews
    </h3>
    <a href={url} alt={url} target="_blank" rel="noopener noreferrer">
      <img alt="rating" src={`/${rating}.png`} className="yelp-stars" />
    </a>
  </>
);

export default BreweryRating;
