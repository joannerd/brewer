import 'regenerator-runtime';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Brewery from './brewery_index_item';
import Loading from '../loading';
import BreweryYelp from '../yelp/brewery_yelp';
import BreweryReviews from '../yelp/brewery_reviews';

const BreweryShow = ({
  fetchBrewery,
  fetchYelp,
  fetchYelpInfo,
  fetchYelpReviews,
  clearYelp,
  match,
  brewery,
  yelp,
  reviews,
}) => {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchBreweryShowInfo() {
      await clearYelp();

      const res = await fetchBrewery(match.params.breweryId);
      const {
        name,
        address,
        city,
        state,
      } = Object.values(res.brewery)[0];
      const streetAddress = address.split(',')[0];

      const result = await fetchYelp(name, streetAddress, city, state);
      const yelpResult = result.yelp.businesses[0];

      setIsLoading(false);

      if (yelpResult !== undefined) {
        const yelpId = yelpResult.id;
        fetchYelpInfo(yelpId);
        fetchYelpReviews(yelpId);
      }
    }

    fetchBreweryShowInfo();
  }, [match.params.breweryId]);

  const yelpInfo = () => {
    if (!yelp) return null;
    return (
      <>
        <BreweryYelp price={yelp.price} hours={yelp.hours[0]} />
        <BreweryReviews
          reviews={reviews}
          rating={yelp.rating}
          reviewCount={yelp.reviewCount}
          url={yelp.url}
        />
      </>
    );
  };

  return isLoading ? <Loading /> : (
    <div className="brewery show">
      <Brewery brewery={brewery} />
      {yelpInfo()}
    </div>
  );
};

BreweryShow.propTypes = {
  match: PropTypes.object.isRequired,
  brewery: PropTypes.object,
  yelp: PropTypes.object,
  reviews: PropTypes.array.isRequired,
  fetchBrewery: PropTypes.func.isRequired,
  fetchYelp: PropTypes.func.isRequired,
  fetchYelpInfo: PropTypes.func.isRequired,
  fetchYelpReviews: PropTypes.func.isRequired,
  clearYelp: PropTypes.func.isRequired,
};

export default BreweryShow;
