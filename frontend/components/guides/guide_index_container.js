import { connect } from 'react-redux';
import GuideIndex from './guide_index';
import { fetchGuides, fetchGuide, deleteGuide } from '../../actions/guide_actions';

const msp = state => {
  return({
  guides: Object.values(state.entities.guides)
  })
};

const mdp = dispatch => ({
  fetchGuides: () => dispatch(fetchGuides()),
  deleteGuide: guideId => dispatch(deleteGuide(guideId))
})

export default connect(msp, mdp)(GuideIndex);