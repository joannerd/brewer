import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostShow = ({ post, match, fetchPost }) => {
  // const { title, body, author, timestamp, id } = post;

  window.scrollTo(0, 0);

  useEffect(() => {
    fetchPost(match.params.postId);
  }, [match.params.postId]);

  return (post === undefined) ? null : (
    <section className="post-show">
      <div className="post-header">
        <h2>{post.title}</h2>
        <h4>Posted by {post.author} | {new Date(post.timestamp).toDateString()}</h4>
      </div>
      <p>{post.body}</p>
    </section>
  );
}

export default PostShow;