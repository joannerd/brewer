import { RECEIVE_YELP, RECEIVE_YELP_INFO, RECEIVE_YELP_REVIEWS } from "../actions/yelp_actions";

const yelpReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    // case RECEIVE_YELP:
      // newState[action.yelp.businesses[0].id] = {
      //   id: action.yelp.businesses[0].id
      // };
      // return newState;
      // return null;
    case RECEIVE_YELP_INFO:
      newState[action.yelpInfo.id] = {
        id: action.yelpInfo.id,
        rating: action.yelpInfo.rating,
        price: action.yelpInfo.price,
        hours: action.yelpInfo.hours,
        reviewCount: action.yelpInfo.review_count
      };
      return newState;
    // case RECEIVE_YELP_REVIEWS:
    //   newState[action.yelpReviews] = { reviews: action.yelpReviews };
    //   return newState;
    default:
      return oldState;
  }
};

export default yelpReducer;