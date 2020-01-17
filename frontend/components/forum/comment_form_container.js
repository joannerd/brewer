import { connect } from "react-redux";
import PostCommentForm from './post_comment_form';
import { createPost, fetchPost } from '../../actions/post_actions';
// import { createComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId],
  formType: "Write comment"
});

const mdp = dispatch => ({
  fetchAction: postId => dispatch(fetchPost(postId)),
  // formAction: comment => dispatch(createComment(comment))
  formAction: post => dispatch(createPost(post))
});

export default withRouter(connect(msp, mdp)(PostCommentForm));