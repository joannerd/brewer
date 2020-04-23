import { connect } from 'react-redux';
import { fetchGuides, fetchGuide } from '../../actions/guide_actions';
import { fetchBreweries } from '../../actions/brewery_actions';
import GuideIndex from './guide_index';

const msp = ({ entities }) => ({
  guides: Object.values(entities.guides),
});

const mdp = dispatch => ({
  fetchBreweries: () => dispatch(fetchBreweries()),
  fetchGuides: () => dispatch(fetchGuides()),
  fetchGuide: (guideId) => dispatch(fetchGuide(guideId)),
});

export default connect(msp, mdp)(GuideIndex);
