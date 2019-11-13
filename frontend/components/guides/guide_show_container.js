import { connect } from 'react-redux';
import Guide from './guide_show';
import { fetchGuide, fetchGuides } from '../../actions/guide_actions'; 
import { fetchBrewery } from '../../actions/brewery_actions';


const msp = (state, ownProps) => {
  return ({
    breweries: state.entities.breweries,
    guide: state.entities.guides[ownProps.match.params.guideId]
  })
};

const mdp = dispatch => ({
  fetchGuide: guideId => dispatch(fetchGuide(guideId)),
  fetchGuides: () => dispatch(fetchGuides()),
  fetchBrewery: (breweryId) => dispatch(fetchBrewery(breweryId))
})

export default connect(msp, mdp)(Guide);