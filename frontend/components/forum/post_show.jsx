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

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [postId]);

  const handleDelete = () => {
    dispatch(deletePost(postId));
    history.push('/forum');
  };

  if (post === undefined) return <Loading />;

  const deleteButton = post.userId === currentUserId
    ? <button onClick={handleDelete}>Delete</button>
    : null;

  const postComments = comments.length > 0 ? (
    comments.map((comment, i) => (
      <Comment
        key={`comment-${i}`}
        comment={comment}
        currentUserId={currentUserId}
        postId={post.id}
      />
    ))
  ) : (
    <li key="none" className="post comment none">
      <p>
        This post has no comments yet.
        <br />
        Write a comment below!
      </p>
    </li>
  );

  return (
    <section className="forum post-show">
      <Post post={post} />
      <ul>
        <h2>Comments</h2>
        {postComments}
      </ul>
      <PostCommentForm
        fetchAction={fetchPost}
        formAction={createComment}
        formType="Write comment"
      />
      {deleteButton}
    </section>
  );
};

export default PostShow;
