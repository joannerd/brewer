import React, { useEffect } from 'react';

const Post = ({ post, fetchPost }) => {
  const {userId, title, body } = post;
  window.scrollTo(0, 0);

  // useEffect(() => {
  //   fetchPost(match.params.postId);
  // }, [match.params.postId]);

  return (
    <li className="post">
      <h1>{title}</h1>
      <p>{body}</p>
    </li>
  );
}

export default Post;