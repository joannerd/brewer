import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchSearchEntities } from '../../actions/search_actions';
import NavBar from './navigation_bar';

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  searchItems: state.entities.search,
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSearchEntities: () => dispatch(fetchSearchEntities()),
});

export default withRouter(connect(msp, mdp)(NavBar));
