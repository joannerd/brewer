import { connect } from "react-redux";
import Forum from './forum';
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const msp = state => ({
  posts: Object.values(state.entities.posts)
});

const mdp = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: postId => dispatch(fetchPost(postId))
});

export default withRouter(connect(msp, mdp)(Forum));