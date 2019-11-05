import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Splash from './splash';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()).then(() => ownProps.history.push("/"))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);