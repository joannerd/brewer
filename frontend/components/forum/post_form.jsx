import React, { useState } from 'react';

const PostForm = ({ createPost, authorId }) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    createPost({ title, body, user_id: authorId });
  }

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        className="write"
        type="textarea"
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Write post"
      />

      <input
        type="submit"
        value="Submit"
        className="post-form-submit"
      />
    </form>
  );
};

export default PostForm;
