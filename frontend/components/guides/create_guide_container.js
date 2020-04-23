import { connect } from 'react-redux';
import { createGuide } from '../../actions/guide_actions';
import { fetchBreweries } from '../../actions/brewery_actions';
import { fetchCities } from '../../actions/city_actions';
import GuideForm from './guide_form';

const msp = ({ entities, session }) => ({
  guide: {
    title: '',
    body: '',
    cityId: '',
    userId: session.id,
  },
  cities: Object.values(entities.cities),
  breweries: Object.values(entities.breweries),
  authorId: session.id,
});

const mdp = dispatch => ({
  createGuide: guide => dispatch(createGuide(guide)),
  fetchBreweries: () => dispatch(fetchBreweries()),
  fetchCities: () => dispatch(fetchCities()),
});

export default connect(msp, mdp)(GuideForm);
