import { logout, receiveCurrentUser, fetchUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import NavBar from './navigation_bar';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);