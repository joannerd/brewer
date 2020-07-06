import {
  RECEIVE_ALL_CITIES,
  RECEIVE_CITY,
  CLEAR_CITIES,
  CLEAR_CITY,
} from '../actions/city_actions';
import {
  RECEIVE_NEW_GUIDE,
  CLEAR_NEW_GUIDE,
  CLEAR_GUIDE,
} from '../actions/guide_actions';

const citiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return action.cities;
    case RECEIVE_CITY:
      return action.payload.cities;
    case RECEIVE_NEW_GUIDE:
      return action.payload.cities;
    case CLEAR_NEW_GUIDE:
      return {};
    case CLEAR_CITIES:
      return {};
    case CLEAR_GUIDE:
      return {};
    case CLEAR_CITY:
      return {};
    default:
      return oldState;
  }
};

export default citiesReducer;
