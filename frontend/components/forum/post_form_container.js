import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostCommentForm from './post_comment_form';

const msp = state => ({
  authorId: state.session.id,
  formType: "Write post"
});


const mdp = dispatch => ({
  formAction: post => dispatch(createPost(post))
});

export default connect(msp, mdp)(PostCommentForm);
