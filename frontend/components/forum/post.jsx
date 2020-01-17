import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const { title, body, author, timestamp, id } = post;
  let date = new Date(timestamp).toDateString()
  window.scrollTo(0, 0);

  return (
    <li className="post">
      <h4 id="post-creator">Posted by {author} | {date}</h4>
      <Link to={`/posts/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{body}</p>
    </li>
  );
}

export default Post;