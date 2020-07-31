import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPost, fetchPosts } from '../../actions/post_actions';
import PostCommentForm from './post_comment_form';
import Post from './post';
import Loading from '../loading';

const Forum = () => {
  const posts = useSelector(state => Object.values(state.entities.posts));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return posts.length === 0 ? (
    <Loading />
  ) : (
    <section className="forum">
      <h1>Forum</h1>
      <PostCommentForm
        fetchAction={fetchPosts}
        formAction={createPost}
        formType="Write post"
      />
      <ul>
        {posts.reverse().map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Forum;
