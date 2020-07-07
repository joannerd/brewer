import {
  RECEIVE_ALL_BREWERIES,
  RECEIVE_BREWERY,
  CLEAR_BREWERIES,
} from '../actions/brewery_actions';
import {
  RECEIVE_GUIDE,
  RECEIVE_ALL_GUIDES,
  RECEIVE_NEW_GUIDE,
  CLEAR_NEW_GUIDE,
  CLEAR_GUIDE,
} from '../actions/guide_actions';
import { RECEIVE_CITY, CLEAR_CITY } from '../actions/city_actions';

const breweriesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_BREWERIES:
      return action.breweries;
    case RECEIVE_BREWERY:
      return action.brewery;
    case RECEIVE_ALL_GUIDES:
      return action.payload.breweries;
    case RECEIVE_GUIDE:
      return action.payload.breweries;
    case RECEIVE_NEW_GUIDE:
      return action.payload.breweries;
    case CLEAR_NEW_GUIDE:
      return {};
    case CLEAR_BREWERIES:
      return {};
    case CLEAR_GUIDE:
      return {};
    case CLEAR_CITY:
      return {};
    case RECEIVE_CITY:
      return { ...action.payload.breweries };
    default:
      return oldState;
  }
};

export default breweriesReducer;
