import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { createComment } from '../../actions/comment_actions';
import Post from './post';
import PostCommentForm from './post_comment_form';
import Comment from './comment';
import Loading from '../loading';

const PostShow = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postId } = useParams();
  const post = useSelector(state => state.entities.posts[postId]);
  const comments = useSelector(state => Object.values(state.entities.comments));
  const currentUserId = useSelector(state => parseInt(state.session.id, 10));

  window.scrollTo(0, 0);

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [postId]);

  function handleDelete() {
    dispatch(deletePost(post.id)).then(() => {
      history.push('/forum');
    });
  }

  function deleteButton() {
    return (post.userId === currentUserId) ? <button onClick={handleDelete}>Delete</button> : null;
  }

  function showComments() {
    return comments.length > 0 ? (
      comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          currentUserId={currentUserId}
          postId={post.id}
        />
      ))
    ) : (
      <li className="post comment none">
        <p>
          This post has no comments yet.
          <br />
          Write a comment below!
        </p>
      </li>
    );
  }

  return post === undefined ? (
    <Loading />
  ) : (
    <section className="forum post-show">
      <Post post={post} />
      <ul>
        <h2>Comments</h2>
        {showComments()}
      </ul>
      <PostCommentForm
        fetchAction={fetchPost}
        formAction={createComment}
        formType="Write comment"
      />
      {deleteButton()}
    </section>
  );
};

export default PostShow;
