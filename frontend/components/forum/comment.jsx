import React from 'react';

const Comment = ({ comment, currentUserId, deleteComment, postId, history }) => {
  const { body, author, timestamp, id } = comment;
  let date = new Date(timestamp).toDateString()
  window.scrollTo(0, 0);

  function handleDelete() {
    deleteComment(id)
      .then(() => {
        history.push(`/posts/${postId}`)
      })
  }

  function deleteButton() {
    return (comment.userId === currentUserId) ? <button onClick={handleDelete}>Delete</button> : null
  }

  return (
    <li className="post comment">
      <h4>Posted by {author} | {date}</h4>
      <p>{body}</p>
      {deleteButton()}
    </li>
  );
}

export default Comment;