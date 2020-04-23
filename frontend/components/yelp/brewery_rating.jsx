import React from 'react';
import PropTypes from "prop-types";

const BreweryRating = ({
  rating, reviewCount, url
}) => (
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

BreweryRating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default BreweryRating;
