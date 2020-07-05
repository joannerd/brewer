import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteComment } from '../../actions/comment_actions';

const Comment = ({ comment, currentUserId, postId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    body,
    author,
    timestamp,
    id,
  } = comment;
  let date = new Date(timestamp).toDateString();

  const handleDelete = () => {
    dispatch(deleteComment(id)).then(() => {
      history.push(`/posts/${postId}`);
    });
  };

  const deleteButton = comment.userId === currentUserId
    ? <button onClick={handleDelete}>Delete</button>
    : null;

  return (
    <li className="post comment">
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
