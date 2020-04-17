import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CityShow from './city_show';
import { fetchCity } from '../../actions/city_actions';


const msp = (state, ownProps) => ({
  city: state.entities.cities[ownProps.match.params.cityId],
  breweries: Object.values(state.entities.breweries),
  guides: Object.values(state.entities.guides),
});

const mdp = dispatch => ({
  fetchCity: cityId => dispatch(fetchCity(cityId)),
});

export default withRouter(connect(msp, mdp)(CityShow));
