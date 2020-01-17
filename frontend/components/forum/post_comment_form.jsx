import React, { useState, useEffect } from 'react';

const PostCommentForm = ({ formAction, formType, match, post, fetchAction }) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  // const [, updateState] = React.useState();

  function handleSubmit(e) {
    e.preventDefault();
    let createdItem;
    formType === "Write post" ? createdItem = { title, body, user_id: post.userId } : createdItem = { body, user_id: post.userId, post_id: match.params.postId };

    formAction(createdItem)
      .then(() => {
        formType === "Write post" ? fetchAction() : fetchAction(match.params.postId)
      });
  }

  useEffect(() => {
    let titleInput = document.getElementById("post-form-title-input");
    formType === "Write comment" ? titleInput.className += "hidden" : titleInput.className -= "hidden";
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
