import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
});

export const fetchUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId)
    .then(payload => dispatch(receiveUser(payload)))
);