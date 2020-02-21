import { logout } from '../../actions/session_actions';
import { fetchSearchBreweries } from '../../actions/search_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navigation_bar';

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  searchItems: state.entities.search
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSearchBreweries: () => dispatch(fetchSearchBreweries())
});

export default withRouter(connect(msp, mdp)(NavBar));