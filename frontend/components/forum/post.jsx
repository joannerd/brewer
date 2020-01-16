import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const { title, body, author, timestamp, id } = post;
  let date = new Date(timestamp)
  window.scrollTo(0, 0);

  return (
    <Link to={`/posts/${id}`}>
      <li className="post">
        <div className="post-header">
          <h2>{title}</h2>
          <h4>Posted by {author} | {date.toDateString()}</h4>
        </div>
        <p>{body}</p>
      </li>
    </Link>
  );
}

export default Post;