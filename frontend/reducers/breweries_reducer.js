import { RECEIVE_ALL_BREWERIES, RECEIVE_BREWERY } from "../actions/brewery_actions";

const breweriesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_BREWERIES:
      return action.breweries
    case RECEIVE_BREWERY:
      newState[action.brewery.id] = action.brewery;
      return newState;
    default:
      return oldState
  }
};

export default breweriesReducer;