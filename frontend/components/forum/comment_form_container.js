import { connect } from "react-redux";
import PostCommentForm from './post_comment_form';
import { fetchPost } from '../../actions/post_actions';
// import { createComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId],
  authorId: state.session.id,
  formType: "Write comment"
});

const mdp = dispatch => ({
  // formAction: comment => dispatch(createComment(comment))
});

export default withRouter(connect(msp, mdp)(PostCommentForm));