import { RECEIVE_YELP_INFO } from "../actions/yelp_actions";

const yelpReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_YELP_INFO:
      newState[action.yelpInfo.id] = {
        id: action.yelpInfo.id,
        rating: action.yelpInfo.rating,
        price: action.yelpInfo.price,
        hours: action.yelpInfo.hours,
        reviewCount: action.yelpInfo.review_count
      };
      return newState;
    default:
      return oldState;
  }
};

export default yelpReducer;