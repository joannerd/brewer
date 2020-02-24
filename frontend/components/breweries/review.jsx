import React from "react";

const Review = ({ review }) => {
  const { url, text, rating, time_created, user } = review;
  const { profile_url, image_url, name } = user;

  const date = new Date(time_created).toDateString();

  return (
    <div className="review">
      <h3>{date}</h3>
      <a href={profile_url} target="_blank">
        <h1>{name}</h1>
        <img src={image_url} className="yelp-user" />
      </a>
      <a href={url} target="_blank">
        <img src={`/${rating}.png`} className="yelp-stars" />
      </a>
      <p>{text}</p>
    </div>
  );
};

export default Review;