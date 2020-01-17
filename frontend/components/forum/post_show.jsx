import React, { useEffect } from 'react';
import Post from './post';
import CommentFormContainer from './comment_form_container';

const PostShow = ({ post, match, history, fetchPost, deletePost }) => {
  window.scrollTo(0, 0);

  useEffect(() => {
    fetchPost(match.params.postId);
  }, [match.params.postId]);

  function handleDelete() {
    deletePost(post.id)
      .then(() => {
        history.push("/forum")
      })
  }

  return (post === undefined) ? null : (
    <section className="forum post-show">
      <Post post={post} />
      <CommentFormContainer />
      <button onClick={handleDelete}>Delete</button>
    </section>
  );
}

export default PostShow;