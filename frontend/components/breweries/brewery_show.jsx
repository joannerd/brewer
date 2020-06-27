import 'regenerator-runtime';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Brewery from './brewery_index_item';
import Loading from '../loading';
import { fetchBrewery } from '../../actions/brewery_actions';
import {
  fetchYelp,
  fetchYelpInfo,
  fetchYelpReviews,
  clearYelp,
} from '../../actions/yelp_actions';
import BreweryYelp from '../yelp/brewery_yelp';
import BreweryReviews from '../yelp/brewery_reviews';

const BreweryShow = () => {
  const { breweryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const brewery = useSelector(
    state => state.entities.breweries[breweryId],
  );
  const yelp = useSelector(state => Object.values(state.entities.yelp)[0]);
  const reviews = useSelector(state => state.entities.reviews);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBreweryShowInfo = async () => {
      await dispatch(clearYelp());

      const res = await dispatch(fetchBrewery(breweryId));
      const {
        name,
        address,
        city,
        state,
      } = Object.values(res.brewery)[0];
      const streetAddress = address.split(',')[0];

      const result = await dispatch(fetchYelp(name, streetAddress, city, state));
      const yelpResult = result.yelp.businesses[0];

      setIsLoading(false);

      if (yelpResult !== undefined) {
        const yelpId = yelpResult.id;
        dispatch(fetchYelpInfo(yelpId));
        dispatch(fetchYelpReviews(yelpId));
      }
    };

    fetchBreweryShowInfo();
  }, [breweryId]);

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

export default BreweryShow;
