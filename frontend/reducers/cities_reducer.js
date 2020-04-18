import { RECEIVE_ALL_CITIES, RECEIVE_CITY } from '../actions/city_actions';

const citiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return action.cities;
    case RECEIVE_CITY:
      return action.payload.cities;
    default:
      return oldState;
  }
};

export default citiesReducer;
