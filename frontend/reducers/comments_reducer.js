import { RECEIVE_POST } from '../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_POST:
      return !action.payload.comments ? {} : action.payload.comments
    case RECEIVE_COMMENT:
      return action.comment
    case REMOVE_COMMENT:
      delete newState[action.commentId];
      return newState;
    default:
      return oldState;
  }
}

export default commentsReducer;