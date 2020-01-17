import React, { useEffect } from 'react';
import Post from './post';
import CommentFormContainer from './comment_form_container';

const PostShow = ({ post, match, history, fetchPost, deletePost, currentUserId }) => {
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

  function deleteButton() {
    return (post.userId === currentUserId) ? <button onClick={handleDelete}>Delete</button> : null
  }

  return (post === undefined) ? null : (
    <section className="forum post-show">
      <Post post={post} />
      <CommentFormContainer />
      {deleteButton()}
    </section>
  );
}

export default PostShow;