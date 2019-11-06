import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'signup',
  formHeader: 'Sign Up',
  otherForm: 'Log In',

  currentUser: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);