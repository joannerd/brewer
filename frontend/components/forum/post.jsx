import React, { useEffect } from 'react';

const Post = ({ post, fetchPost, match }) => {
  window.scrollTo(0, 0);

  useEffect(() => {
    fetchPost(match.params.postId);
  }, [match.params.postId]);

  return (
    <li className="post">
      <h1>this is a post</h1>
    </li>
  );
}

export default Post;