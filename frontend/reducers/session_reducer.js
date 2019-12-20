import { RECEIVE_CURRENT_USER, LOG_OUT_CURRENT_USER } from "../actions/session_actions";

const sessionReducer = (oldState = { id: null }, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: Object.values(action.user.users)[0].id, username: Object.values(action.user.users)[0].username });
    case LOG_OUT_CURRENT_USER:
      return Object.assign({}, { id: null, username: null })
    default:
      return oldState;
  }
};

export default sessionReducer;