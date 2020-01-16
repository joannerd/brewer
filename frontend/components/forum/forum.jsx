import React, { useEffect } from 'react';
import Post from './post';
import PostFormContainer from './post_form_container';

const Forum = ({ posts, fetchPosts }) => {
  window.scrollTo(0, 0);

  useEffect(() => {
    fetchPosts();
  }, [])

  return (posts.length === 0) ? null : (
    <section className="forum">
      <h1>Forum</h1>
      <PostFormContainer />
      <ul>
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </ul>
    </section>
  );
}

export default Forum;