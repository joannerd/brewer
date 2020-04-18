import { RECEIVE_CURRENT_USER, LOG_OUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };

  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const userId = Object.keys(action.payload.users)[0];
      const user = Object.values(action.payload.users)[0];
      newState[userId] = user;
      return newState;
    }
    case LOG_OUT_CURRENT_USER:
      return {};
    case RECEIVE_USER:
      return action.payload.users;
    case RECEIVE_USERS:
      return action.users;
    default:
      return oldState;
  }
};

export default usersReducer;
