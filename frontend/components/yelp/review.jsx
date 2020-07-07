import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ review }) => {
  const {
    url,
    text,
    rating,
    user,
    timeCreated,
  } = review;
  const {
    name,
    profileUrl,
    imageUrl,
  } = user;

  const date = new Date(timeCreated).toDateString();

  return (
    <div className="review">
      <div>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={name} className="yelp-user" />
          <h1>{name}</h1>
        </a>
      </div>
      <div>
        <h3>{date}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={`/${rating}.png`} alt={rating} className="yelp-stars" />
        </a>
        <p>{text}</p>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    timeCreated: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

export default Review;
