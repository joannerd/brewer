import React from 'react';
import BreweryRating from './brewery_rating';
import Review from './review';

const BreweryReviews = ({ reviews, rating, reviewCount, url }) => (
  <div className="brewery-yelp">
    <BreweryRating rating={rating} reviewCount={reviewCount} url={reviewCount} />

    {reviews.map((review, i) => (
      <Review review={review} key={i} />
    ))}
  </div>
);

export default BreweryReviews;
