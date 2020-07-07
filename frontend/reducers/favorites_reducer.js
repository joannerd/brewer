import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const favoritesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };

  switch (action.type) {
    case RECEIVE_FAVORITE:
      return action.favorite;
    case REMOVE_FAVORITE:
      delete newState[action.favoriteId];
      return newState;
    case RECEIVE_USER:
      return action.payload.favorites;
    default:
      return oldState;
  }
};

export default favoritesReducer;
