require("regenerator-runtime");
import React, { useState, useEffect } from 'react';
import Brewery from './brewery_index_item';
import Review from './review';
import Loading from '../loading';

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
      const { name, address, cityName, stateName } = Object.values(res.brewery)[0];
      const result = await fetchYelp(name, address, cityName, stateName);
      const yelpId = await result.yelp.businesses[0].id;

      setIsLoading(false);
      fetchYelpInfo(yelpId);
      fetchYelpReviews(yelpId);
    }

    fetchBreweryShowInfo();
  }, [match.params.breweryId]);

  const yelpSection = () => {
    if (reviews.length === 0) {
      return <Loading />
    } else {
      const { rating, price, hours, reviewCount, url } = yelp;
      return (
        <div className="brewery-yelp">
          <h3>Price Range: {price}</h3>
          <a href={url} alt={url} target="_blank"><img src={`/${rating}.png`} className="yelp-stars" /></a>
          <h3>{reviewCount} reviews</h3>

          {reviews.map((review, i) => (
            <Review review={review} key={i} />
          ))}
        </div>
      );
    }
  }

  return isLoading ? <Loading /> : (
    <div className="brewery show">
      <Brewery brewery={brewery} />
      {yelpSection()}
    </div>
  );
};

export default BreweryShow;