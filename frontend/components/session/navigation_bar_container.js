import { logout } from '../../actions/session_actions';
import { fetchBreweries } from '../../actions/brewery_actions';
import { fetchUsers } from '../../actions/user_actions';
import { connect } from 'react-redux';
import NavBar from './navigation_bar';

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  breweries: Object.values(state.entities.breweries),
  users: Object.values(state.entities.users)
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBreweries: () => dispatch(fetchBreweries()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(msp, mdp)(NavBar);