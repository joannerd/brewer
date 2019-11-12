import { connect } from 'react-redux';
import GuideIndex from './guide_index';
import { fetchGuides, fetchGuide, deleteGuide } from '../../actions/guide_actions';

const msp = state => ({
  guides: Object.values(state.guides)
})

const mdp = dispatch => ({
  fetchGuides: () => dispatch(fetchGuides()),
  fetchGuide: guideId => dispatch(fetchGuide(guideId)),
  deleteGuide: guideId => dispatch(deleteGuide(guideId))
})

export default connect(msp, mdp)(GuideIndex);