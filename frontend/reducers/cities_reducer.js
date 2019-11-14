import { RECEIVE_ALL_CITIES, RECEIVE_CITY } from "../actions/city_actions";

const citiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return action.cities
    case RECEIVE_CITY:
      // newState[action.city.id] = action.city;
      // return newState;
      return action.payload.cities
    default:
      return oldState
  }
};

export default citiesReducer;