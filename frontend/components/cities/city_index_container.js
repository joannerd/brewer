import { connect } from 'react-redux';
import { fetchCities } from '../../actions/city_actions';
import CityIndex from './city_index';

const msp = ({ entities }) => ({
  cities: Object.values(entities.cities),
});

const mdp = dispatch => ({
  fetchCities: () => dispatch(fetchCities()),
});

export default connect(msp, mdp)(CityIndex);
