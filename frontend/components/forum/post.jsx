import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const { title, body, author, timestamp, id } = post;
  let date = new Date(timestamp)
  window.scrollTo(0, 0);

  return (
    <li className="post">
      <h4>Posted by {author} | {date.toDateString()}</h4>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
  // return (
  //   <Link to={`/posts/${id}`}>
  //     <li className="post">
//         <h2>{title}</h2>
  //       <p>{body}</p>
//         <h4>Posted by {author} | {date.toDateString()}</h4>
  //     </li>
  //   </Link>
  // );
}

export default Post;