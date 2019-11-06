import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      const newState = Object.assign({}, oldState);
      delete newState.errors;
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
}

export default sessionErrorsReducer;