import { connect } from 'react-redux';
import GuideForm from './guide_form';
import { createGuide, fetchGuide } from '../../actions/guide_actions';
import { fetchBreweries } from '../../actions/brewery_actions';
import { fetchCities } from '../../actions/city_actions';

const msp = state => ({
  guide: {
    title: '',
    body: '',
    cityId: '',
    userId: state.session.id
  },
  formType: 'Create Guide',
  cities: Object.values(state.entities.cities),
  breweries: Object.values(state.entities.breweries)
})

const mdp = dispatch => ({
  formAction: guide => dispatch(createGuide(guide)),
  fetchBreweries: () => dispatch(fetchBreweries()),
  fetchCities: () => dispatch(fetchCities())
})

export default connect(msp, mdp)(GuideForm);