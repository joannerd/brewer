import { RECEIVE_ALL_BREWERIES, RECEIVE_BREWERY } from "../actions/brewery_actions";
import { RECEIVE_GUIDE, RECEIVE_ALL_GUIDES } from '../actions/guide_actions';
import { RECEIVE_CITY } from "../actions/city_actions";

const breweriesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_BREWERIES:
      return action.breweries
    case RECEIVE_BREWERY:
      return action.brewery
    case RECEIVE_ALL_GUIDES:
      return action.payload.breweries
    case RECEIVE_GUIDE:
      return action.payload.breweries
    case RECEIVE_CITY:
      return action.payload.breweries
    default:
      return oldState
  }
};

export default breweriesReducer;