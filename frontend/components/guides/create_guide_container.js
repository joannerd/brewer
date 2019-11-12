import { connect } from 'react-redux';
import GuideForm from './guide_form';
import { createGuide } from '../../actions/guide_actions';

const msp = state => ({
  guide: {
    title: '',
    body: '',
    city_id: ''
  },
  formType: 'Create Guide',
  cities: Object.values(state.entities.cities),
  breweries: Object.values(state.entities.breweries)
})

const mdp = dispatch => ({
  formAction: guide => dispatch(createGuide(guide))
})

export default connect(msp, mdp)(GuideForm);