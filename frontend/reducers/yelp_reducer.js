import { RECEIVE_YELP_INFO } from "../actions/yelp_actions";

const yelpReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_YELP_INFO:
      const { id, rating, price, hours, review_count, url } = action.yelpInfo;

      newState[action.yelpInfo.id] = {
        id,
        url,
        rating,
        price,
        hours,
        reviewCount: review_count
      };
      return newState;
    default:
      return oldState;
  }
};

export default yelpReducer;