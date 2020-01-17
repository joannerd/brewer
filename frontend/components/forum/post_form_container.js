import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostCommentForm from './post_comment_form';
import { withRouter } from 'react-router-dom';

const msp = state => ({
  post: {
    title: "",
    body: "",
    user_id: state.session.id
  },
  formType: "Write post"
});


const mdp = dispatch => ({
  formAction: post => dispatch(createPost(post))
});

export default withRouter(connect(msp, mdp)(PostCommentForm));
