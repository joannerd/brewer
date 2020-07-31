import React from 'react';
import PropTypes from 'prop-types';
import BreweryRating from './brewery_rating';
import Review from './review';

const BreweryReviews = ({
  reviews, rating, reviewCount, url,
}) => (
  <div className="brewery-yelp">
    <BreweryRating rating={rating} reviewCount={reviewCount} url={url} />

    {reviews.map((review) => (
      <Review review={review} key={review.id} />
    ))}
  </div>
);

BreweryReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
export default BreweryReviews;
