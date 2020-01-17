import React, { useState, useEffect } from 'react';

const PostCommentForm = ({ formAction, authorId, formType }) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    formType = "Write post" ? formAction({ title, body, user_id: authorId }) : formAction({ body, user_id: authorId })
  }

  useEffect(() => {
    // formType = "Write post" ?
  }, [])

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
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
