import React, { useEffect } from 'react';
import Post from './post';

const PostShow = ({ post, match, fetchPost }) => {
  window.scrollTo(0, 0);

  useEffect(() => {
    fetchPost(match.params.postId);
  }, [match.params.postId]);

  return (post === undefined) ? null : (
    <section className="forum post-show">
      <Post post={post} />
      {/* <CommentFormContainer /> */}
    </section>
  );
}

export default PostShow;