import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import NavBar from './navigation_bar';

const msp = state => {
  return({
  currentUser: state.entities.users[state.session.id]
})};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(NavBar);