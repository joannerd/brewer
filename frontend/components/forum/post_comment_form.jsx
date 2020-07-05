import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';

const PostCommentForm = ({ formType, formAction, fetchAction }) => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const currentUserId = useSelector((state) => state.session.id);
  const errors = useSelector((state) => state.errors.session);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const isPostForm = formType === 'Write post';
  const isCommentForm = formType === 'Write comment';

  const handleSubmit = (e) => {
    e.preventDefault();
    let createdItem;
    if (isPostForm) {
      createdItem = {
        title,
        body,
        user_id: currentUserId,
      };
    } else {
      createdItem = {
        body,
        user_id: currentUserId,
        post_id: postId,
      };
    }

    dispatch(formAction(createdItem)).then(() => {
      if (isPostForm) {
        dispatch(fetchAction());
      } else {
        dispatch(fetchAction(postId));
      }
    });
  };

  useEffect(() => {
    if (errors.length) dispatch(clearErrors());
  }, []);

  const titleInput = isCommentForm ? null : (
    <input
      required
      id="post-form-title-input"
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
    />
  );

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div>
        {titleInput}
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={formType}
        />
        <input type="submit" value="Submit" className="post-form-submit" />
      </div>
      <ul>
        {errors.map((err, i) => (
          <div className="user-auth-errors" key={i}>
            {err}
          </div>
        ))}
      </ul>
    </form>
  );
};

export default PostCommentForm;
