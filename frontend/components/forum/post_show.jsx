import React, { useEffect } from 'react';
import Post from './post';
import CommentFormContainer from './comment_form_container';
import Comment from './comment';
import Loading from '../loading';

const PostShow = ({ post, comments, match, history, fetchPost, deletePost, deleteComment, currentUserId }) => {
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

  function showComments() {
    return comments.length > 0 ? 
      comments.map((comment, i) => (
        <Comment
          key={i}
          comment={comment}
          currentUserId={currentUserId}
          deleteComment={deleteComment}
          postId={post.id}
          history={history}
        />
      )) :
      <li className="post comment none">
        <p>This post has no comments yet.<br/>
        Write a comment below!</p>
      </li>
  }

  return (post === undefined) ? <Loading /> : (
    <section className="forum post-show">
      <Post post={post} />
      <ul>
        <h2>Comments</h2>
        {showComments()}
      </ul>
      <CommentFormContainer />
      {deleteButton()}
    </section>
  );
}

export default PostShow;