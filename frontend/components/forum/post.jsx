import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const { title, body, author, timestamp, id } = post;
  const date = new Date(timestamp).toDateString();

  return (
    <li className="post">
      <h4>
        Posted by&nbsp;
        {author}
        &nbsp;|&nbsp;
        {date}
      </h4>
      <Link to={`/posts/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{body}</p>
    </li>
  );
};

export default Post;
