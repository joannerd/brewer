import { RECEIVE_POST } from '../actions/post_actions';

const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_POST:
      return action.payload.comments
    default:
      return oldState;
  }
}

export default postsReducer;