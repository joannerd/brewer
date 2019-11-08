import { logout } from '../../actions/session_actions';
import { fetchCities } from '../../actions/city_actions';
import { connect } from 'react-redux';
import NavBar from './navigation_bar';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  cities: Object.values(state.entities.cities)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()), 
  fetchCities: () => dispatch(fetchCities())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);