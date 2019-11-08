import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import breweriesReducer from "./breweries_reducer";
import citiesReducer from "./cities_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  breweries: breweriesReducer,
  cities: citiesReducer
});

export default entitiesReducer;