import { connect } from 'react-redux';
import Guide from './guide_index_item';
import { fetchGuide } from '../../actions/guide_actions';

const msp = (state, ownProps) => {
  return ({
    breweries: Object.values(state.entities.breweries),
    guide: Object.values(state.entities.guides)[ownProps.match.params.guideId]
  })
};

const mdp = dispatch => ({
  fetchGuide: (guideId) => dispatch(fetchGuide(guideId))
})

export default connect(msp, mdp)(Guide);