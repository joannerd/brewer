import { RECEIVE_YELP_REVIEWS, CLEAR_YELP } from "../actions/yelp_actions";

const reviewsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_YELP_REVIEWS:
      return action.yelp.reviews;
    case CLEAR_YELP:
      return oldState
    default:
      return oldState;
  }
};

export default reviewsReducer;
