import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOG_OUT_CURRENT_USER = 'LOG_OUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

const logoutCurrentUser = () => ({
  type: LOG_OUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors.responseJSON
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then(payload => dispatch(receiveCurrentUser(payload)),
      errors => dispatch(receiveErrors(errors)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
      errors => dispatch(receiveErrors(errors)))
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then(payload => dispatch(receiveCurrentUser(payload)),
      errors => dispatch(receiveErrors(errors)))
);