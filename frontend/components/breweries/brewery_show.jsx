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
  clearYelp,
  match,
  brewery,
  yelp,
  reviews
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasYelp, setHasYelp] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchBreweryShowInfo() {
      await clearYelp();
      
      const res = await fetchBrewery(match.params.breweryId);
      const { name, address, city, state } = Object.values(res.brewery)[0];
      let streetAddress = address.split(",")[0]
      
      const result = await fetchYelp(name, streetAddress, city, state);
      const yelpResult = result.yelp.businesses[0];

      setIsLoading(false);

      if (yelpResult !== undefined) {
        const yelpId = yelpResult.id;
        fetchYelpInfo(yelpId);
        fetchYelpReviews(yelpId);
        setHasYelp(true);
      }
    }

    fetchBreweryShowInfo();
  }, [match.params.breweryId]);

  const yelpSection = () => {
    if (!hasYelp || !yelp || reviews.length === 0) {
      return null;
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