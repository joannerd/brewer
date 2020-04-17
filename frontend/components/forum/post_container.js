import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { deleteComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId],
  comments: Object.values(state.entities.comments),
  currentUserId: parseInt(state.session.id, 10),
});

const mdp = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default withRouter(connect(msp, mdp)(PostShow));
