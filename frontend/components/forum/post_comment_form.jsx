import React, { useState, useEffect } from 'react';

const PostCommentForm = ({ formAction, formType, match, post }) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    formType = "Write post" ? formAction({ title, body, user_id: authorId }) : formAction({ body, user_id: post.user_id, post_id: match.params.postId })
  }

  useEffect(() => {
    if (formType = "Write comment") document.getElementById("post-form-title-input").className = "hidden";
  }, [])

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        id="post-form-title-input"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder={formType}
      />

      <input
        type="submit"
        value="Submit"
        className="post-form-submit"
      />
    </form>
  );
};

export default PostCommentForm;
