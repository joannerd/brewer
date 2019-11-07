import { RECEIVE_CURRENT_USER, LOG_OUT_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, action.user)
    case LOG_OUT_CURRENT_USER:
      return Object.assign({}, null)
    default:
      return oldState
  }
};

export default usersReducer;