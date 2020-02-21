import { RECEIVE_SEARCH_BREWERIES } from "../actions/search_actions";

const searchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SEARCH_BREWERIES:
      return Object.values(action.breweries);
    default:
      return oldState
  }
};

export default searchReducer;