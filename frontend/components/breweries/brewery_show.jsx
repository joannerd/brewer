import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Brewery from './brewery_index_item';
import Loading from '../loading';
import { fetchBrewery, clearBreweries } from '../../actions/brewery_actions';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';
import BreweryYelp from '../yelp/brewery_yelp';
import BreweryReviews from '../yelp/brewery_reviews';

const BreweryShow = () => {
  const { breweryId } = useParams();
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.session.id);
  const brewery = useSelector(
    state => state.entities.breweries[breweryId],
  );
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    setIsUpdated(false);
    window.scrollTo(0, 0);
    dispatch(fetchBrewery(breweryId));
    return () => dispatch(clearBreweries());
  }, [isUpdated]);

  if (!brewery || !brewery.yelp || !brewery.favoritedBy) return <Loading />;
  const {
    price, hours, rating, reviewCount, url,
  } = brewery.yelp;
  const isCurrentUserFavorite = Object.keys(brewery.favoritedBy).includes(currentUserId);

  const toggleFavorite = () => {
    if (isCurrentUserFavorite) {
      const { id } = brewery.favoritedBy[currentUserId];
      dispatch(deleteFavorite(id));
    } else {
      const newFavorite = {
        user_id: currentUserId,
        brewery_id: brewery.id,
      };
      dispatch(createFavorite(newFavorite));
    }
    setIsUpdated(true);
  };

  return (
    <div className="brewery show">
      <Brewery
        brewery={brewery}
        isCurrentUserFavorite={isCurrentUserFavorite}
        toggleFavorite={toggleFavorite}
      />
      <BreweryYelp price={price} hours={hours} />
      <h3>
        Favorited by
        &nbsp;
        {brewery.favoritedBy.length}
        &nbsp;
        users
      </h3>
      <BreweryReviews
        reviews={brewery.reviews}
        rating={rating}
        reviewCount={reviewCount}
        url={url}
      />
    </div>
  );
};

export default BreweryShow;
