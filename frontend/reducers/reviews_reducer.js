import { RECEIVE_YELP_REVIEWS } from "../actions/yelp_actions";

const reviewsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_YELP_REVIEWS:
      return action.yelp.reviews;
    default:
      return oldState;
  }
};

export default reviewsReducer;
