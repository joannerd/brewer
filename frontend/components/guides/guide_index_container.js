import { connect } from 'react-redux';
import GuideIndex from './guide_index';
import { fetchGuides, deleteGuide } from '../../actions/guide_actions';
import { fetchBreweries } from '../../actions/brewery_actions';

const msp = state => {
  return ({
    // breweries: Object.values(state.entities.breweries),
    guides: Object.values(state.entities.guides)
  })
};

const mdp = dispatch => ({
  fetchBreweries: () => dispatch(fetchBreweries()),
  fetchGuides: () => dispatch(fetchGuides()),
  // deleteGuide: guideId => dispatch(deleteGuide(guideId))
})

export default connect(msp, mdp)(GuideIndex);