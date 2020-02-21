import { logout } from '../../actions/session_actions';
import { fetchBreweries } from '../../actions/brewery_actions';
import { connect } from 'react-redux';
import NavBar from './navigation_bar';

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  breweries: Object.values(state.entities.breweries)
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBreweries: () => dispatch(fetchBreweries())
});

export default connect(msp, mdp)(NavBar);