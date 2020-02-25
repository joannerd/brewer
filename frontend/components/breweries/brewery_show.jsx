require("regenerator-runtime");
import React, { useState, useEffect } from 'react';
import Brewery from './brewery_index_item';
import Review from './review';

const BreweryShow = ({
  fetchBrewery,
  fetchYelp,
  fetchYelpInfo,
  fetchYelpReviews,
  match,
  brewery,
  yelp,
  reviews
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBreweryShowInfo() {
      const res = await fetchBrewery(match.params.breweryId);

      const { name, address } = Object.values(res.brewery)[0];

      let place = address.split(" ");

      let streetAddress = await place.slice(0, 3).join(" ");
      let city = await place[3];
      let state = (await place[4][0]) + place[5][0];

      const result = await fetchYelp(name, streetAddress, city, state);
      setIsLoading(false);

      const yelpId = await result.yelp.businesses[0].id;
      fetchYelpInfo(yelpId);
      fetchYelpReviews(yelpId);
    }

    fetchBreweryShowInfo();
  }, [match.params.breweryId]);

  const yelpSection = () => {
    if (reviews.length === 0) {
      return null
    } else {
      const { rating, price, hours, review_count } = yelp;
      return (
        <div className="brewery-yelp">
          <h3>Price Range: {price}</h3>
          <img src={`/${rating}.png`} className="yelp-stars" />
          <h3>{review_count} reviews</h3>

          {reviews.map((review, i) => (
            <Review review={review} key={i} />
          ))}
        </div>
      );
    }
  }

  return isLoading ? null : (
    <div className="brewery show">
      <Brewery brewery={brewery} />
      {yelpSection()}
    </div>
  );
};

export default BreweryShow;