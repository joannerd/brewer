import * as CommentApiUtil from '../util/comment_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment,
});
const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId,
});

export const createComment = comment => dispatch => (
  CommentApiUtil.createComment(comment)
    .then(res => dispatch(receiveComment(res),
      errors => dispatch(receiveErrors(errors)))));

export const deleteComment = commentId => dispatch => (
  CommentApiUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId))));
