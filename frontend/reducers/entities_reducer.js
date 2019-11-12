import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import breweriesReducer from "./breweries_reducer";
import citiesReducer from "./cities_reducer";
import guidesReducer from "./guides_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  breweries: breweriesReducer,
  cities: citiesReducer,
  guides: guidesReducer
});

export default entitiesReducer;