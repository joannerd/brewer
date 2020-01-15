import React, { useEffect } from 'react';
import Post from './post';

const Forum = ({ posts, fetchPosts, fetchPost }) => {
  window.scrollTo(0, 0);

  useEffect(() => {
    fetchPosts();
  }, [])

  return (posts.length === 0) ? null : (
    <section className="forum">
      <h1>Forum</h1>
      <ul className="posts">
        {posts.map((post, i) => (
          <Post key={i} post={post} fetchPost={fetchPost}/>
        ))}
      </ul>
    </section>
  );
}

export default Forum;