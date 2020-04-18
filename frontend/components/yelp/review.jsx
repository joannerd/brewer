import React from "react";

const Review = ({ review }) => {
  const { url, text, rating, time_created, user } = review;
  const { profile_url, image_url, name } = user;

  const date = new Date(time_created).toDateString();

  return (
    <div className="review">
      <div>
        <a href={profile_url} target="_blank">
          <img src={image_url} className="yelp-user" />
          <h1>{name}</h1>
        </a>
      </div>
      <div>
        <h3>{date}</h3>
        <a href={url} target="_blank">
          <img src={`/${rating}.png`} className="yelp-stars" />
        </a>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Review;