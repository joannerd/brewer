import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Splash from './splash';


const mapStateToProps = (state) => ({
  currentUser: state.users
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);