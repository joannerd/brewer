import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Forum from './forum';
import { fetchPosts } from '../../actions/post_actions';

const msp = state => ({
  posts: Object.values(state.entities.posts),
});

const mdp = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default withRouter(connect(msp, mdp)(Forum));
