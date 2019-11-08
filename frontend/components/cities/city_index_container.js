import { connect } from "react-redux";
import CityIndex from './city_index';
import { fetchCities } from '../../actions/city_actions';

const msp = (state) => ({
  cities: Object.values(state.entities.cities)
})

const mdp = dispatch => ({
  fetchCities: () => dispatch(fetchCities())
})

export default connect(msp, mdp)(CityIndex)