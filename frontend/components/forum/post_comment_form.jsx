import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

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
    const titleInput = document.getElementById('post-form-title-input');
    if (isCommentForm) {
      titleInput.className += 'hidden';
    } else {
      titleInput.className -= 'hidden';
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        id="post-form-title-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={formType}
      />
      <div>
        {errors.map((err, i) => (
          <div className="user-auth-errors" key={i}>
            {err}
          </div>
        ))}
      </div>
      <input type="submit" value="Submit" className="post-form-submit" />
    </form>
  );
};

export default PostCommentForm;
