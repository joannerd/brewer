import React, { useEffect } from 'react';
import Post from './post';
import CommentFormContainer from './comment_form_container';
import Comment from './comment';

const PostShow = ({ post, comments, match, history, fetchPost, deletePost, currentUserId }) => {
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
      <ul>
        <h2>Comments</h2>
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </ul>
      <CommentFormContainer />
      {deleteButton()}
    </section>
  );
}

export default PostShow;