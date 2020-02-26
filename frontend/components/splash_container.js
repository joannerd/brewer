import { connect } from "react-redux";
import Splash from './splash';
import { fetchCities } from '../actions/city_actions';
import { withRouter } from 'react-router-dom';

const msp = state => ({
  cities: state.entities.cities
});

const mdp = dispatch => ({
  fetchCities: () => dispatch(fetchCities())
});

export default withRouter(connect(msp, mdp)(Splash));