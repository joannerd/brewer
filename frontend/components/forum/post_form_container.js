import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const msp = state => ({
  authorId: state.session.id
});


const mdp = dispatch => ({
  createPost: post => dispatch(createPost(post))
});

export default connect(msp, mdp)(PostForm);
