import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload,
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const fetchUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId)
    .then(payload => dispatch(receiveUser(payload)))
);

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
);
