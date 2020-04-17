import { RECEIVE_YELP_INFO, RECEIVE_YELP, CLEAR_YELP } from '../actions/yelp_actions';

const yelpReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };

  switch (action.type) {
    case RECEIVE_YELP:
    case RECEIVE_YELP_INFO: {
      const {
        id,
        rating,
        price,
        hours,
        review_count: reviewCount,
        url,
      } = action.yelpInfo;

      newState[id] = {
        id,
        url,
        rating,
        price,
        hours,
        reviewCount,
      };
      return newState;
    }
    case CLEAR_YELP:
      return oldState;
    default:
      return oldState;
  }
};

export default yelpReducer;
