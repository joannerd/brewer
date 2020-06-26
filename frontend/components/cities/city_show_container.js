import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCity } from '../../actions/city_actions';
import CityShow from './city_show';

const msp = ({ entities }, ownProps) => ({
  city: entities.cities[ownProps.match.params.cityId],
  breweries: Object.values(entities.breweries),
  guides: Object.values(entities.guides),
});

const mdp = dispatch => ({
  fetchCity: cityId => dispatch(fetchCity(cityId)),
});

export default withRouter(connect(msp, mdp)(CityShow));
