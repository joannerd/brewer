import * as FavoriteAPIUtil from '../util/favorite_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const receiveFavorite = (favorite) => ({
  type: RECEIVE_FAVORITE,
  favorite,
});

const removeFavorite = (favoriteId) => ({
  type: REMOVE_FAVORITE,
  favoriteId,
});

export const createFavorite = favorite => dispatch => (
  FavoriteAPIUtil.createFavorite(favorite)
    .then(res => dispatch(receiveFavorite(res)),
      errors => dispatch(receiveErrors(errors))));

export const deleteFavorite = favoriteId => dispatch => (
  FavoriteAPIUtil.deleteFavorite(favoriteId)
    .then(() => dispatch(removeFavorite(favoriteId))));
