import React from 'react';

const Comment = ({ comment }) => {
  const { body, author, timestamp } = comment;
  let date = new Date(timestamp).toDateString()
  window.scrollTo(0, 0);

  return (
    <li className="post comment">
      <h4>Posted by {author} | {date}</h4>
      <p>{body}</p>
    </li>
  );
}

export default Comment;