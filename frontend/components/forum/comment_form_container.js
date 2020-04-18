import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostCommentForm from './post_comment_form';
import { fetchPost } from '../../actions/post_actions';
import { createComment } from '../../actions/comment_actions';

const msp = state => ({
  currentUserId: state.session.id,
  formType: 'Write comment',
});

const mdp = dispatch => ({
  fetchAction: postId => dispatch(fetchPost(postId)),
  formAction: comment => dispatch(createComment(comment)),
});

export default withRouter(connect(msp, mdp)(PostCommentForm));
