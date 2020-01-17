import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../../actions/post_actions';
import PostCommentForm from './post_comment_form';
import { withRouter } from 'react-router-dom';

const msp = state => ({
  post: {
    title: "",
    body: "",
    userId: state.session.id
  },
  formType: "Write post"
});


const mdp = dispatch => ({
  fetchAction: () => dispatch(fetchPosts()),
  formAction: post => dispatch(createPost(post))
});

export default withRouter(connect(msp, mdp)(PostCommentForm));
