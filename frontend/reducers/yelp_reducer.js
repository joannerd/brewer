import { RECEIVE_YELP, RECEIVE_YELP_INFO, RECEIVE_YELP_REVIEWS } from "../actions/yelp_actions";

const yelpReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_YELP:
      newState[Object.keys(action.yelp.businesses[0].id)] = {};
      return newState;
    case RECEIVE_YELP_INFO:
      newState[Object.keys(action.yelpId)] = { info: action.yelpInfo };
      return newState;
    case RECEIVE_YELP_REVIEWS:
      newState[Object.keys(action.yelpId)] = { reviews: action.yelpReviews };
      return newState;
    default:
      return oldState;
  }
};

export default yelpReducer;