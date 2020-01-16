import { connect } from "react-redux";
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId]
});

const mdp = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId))
});

export default withRouter(connect(msp, mdp)(PostShow));