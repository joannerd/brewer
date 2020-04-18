import { connect } from 'react-redux';
import GuideIndex from './guide_index';
import { fetchGuides, fetchGuide } from '../../actions/guide_actions';
import { fetchBreweries } from '../../actions/brewery_actions';

const msp = state => ({
  guides: Object.values(state.entities.guides),
});

const mdp = dispatch => ({
  fetchBreweries: () => dispatch(fetchBreweries()),
  fetchGuides: () => dispatch(fetchGuides()),
  fetchGuide: (guideId) => dispatch(fetchGuide(guideId)),
});

export default connect(msp, mdp)(GuideIndex);
