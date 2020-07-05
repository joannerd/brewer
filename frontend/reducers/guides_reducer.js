import {
  RECEIVE_ALL_GUIDES,
  RECEIVE_GUIDE,
  REMOVE_GUIDE,
  CLEAR_GUIDE,
} from '../actions/guide_actions';
import { RECEIVE_CITY } from '../actions/city_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const guidesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_ALL_GUIDES:
      return action.payload.guides;
    case RECEIVE_GUIDE:
      return action.payload.guides;
    case REMOVE_GUIDE:
      delete newState[action.guideId];
      return newState;
    case RECEIVE_CITY:
      return { ...action.payload.guides };
    case RECEIVE_USER:
      return { ...action.payload.guides };
    case CLEAR_GUIDE:
      return {};
    default:
      return oldState;
  }
};

export default guidesReducer;
