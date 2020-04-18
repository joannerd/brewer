import { combineReducers } from 'redux';
import users from './users_reducer';
import breweries from './breweries_reducer';
import cities from './cities_reducer';
import guides from './guides_reducer';
import posts from './posts_reducer';
import comments from './comments_reducer';
import search from './search_reducer';
import yelp from './yelp_reducer';
import reviews from './reviews_reducer';

const entitiesReducer = combineReducers({
  users,
  breweries,
  cities,
  guides,
  posts,
  comments,
  search,
  yelp,
  reviews,
});

export default entitiesReducer;
