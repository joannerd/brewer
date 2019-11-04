import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors,
  formType: 'login',
  formHeader: 'Log In',
  otherForm: 'Sign Up',
  otherFormUrl: '/signup',

  currentUser: state.session.id
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);