import { combineReducers } from "redux";
import users from "./users_reducer";
import breweries from "./breweries_reducer";
import cities from "./cities_reducer";
import guides from "./guides_reducer";
import posts from "./posts_reducer";
import comments from "./comments_reducer";

const entitiesReducer = combineReducers({
  users,
  breweries,
  cities,
  guides,
  posts,
  comments
});

export default entitiesReducer;