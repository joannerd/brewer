import { connect } from 'react-redux';
import Guide from './guide_show';
import { fetchGuide, fetchGuides } from '../../actions/guide_actions'; 
import { fetchBrewery } from '../../actions/brewery_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
  return ({
    breweries: Object.values(state.entities.breweries),
    guide: state.entities.guides[ownProps.match.params.guideId],
  })
};

const mdp = dispatch => ({
  fetchGuide: guideId => dispatch(fetchGuide(guideId)),
  fetchGuides: () => dispatch(fetchGuides()),
  fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId))
})

export default withRouter(connect(msp, mdp)(Guide));