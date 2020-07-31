import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteComment } from '../../actions/comment_actions';

const Comment = ({ comment, currentUserId, postId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  if (!comment) return null;

  const {
    body,
    author,
    timestamp,
    id,
    userId,
  } = comment;
  const date = new Date(timestamp).toDateString();

  const handleDelete = () => {
    dispatch(deleteComment(id))
    history.push(`/posts/${postId}`);
  };

  const deleteButton = userId === currentUserId
    ? <button onClick={handleDelete}>Delete</button>
    : null;

  return (
    <li key={comment.id} className="post comment">
      <h4>
        Posted by&nbsp;
        {author}
        &nbsp;|&nbsp;
        {date}
      </h4>
      <p>{body}</p>
      {deleteButton}
    </li>
  );
};

export default Comment;
