import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => ({
  errors: state.errors,
  formType: 'signup',
  formHeader: 'Sign Up',
  otherForm: 'Log In',
  // otherFormUrl: '/login',

  currentUser: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);