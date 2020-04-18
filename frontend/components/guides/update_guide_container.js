import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import GuideForm from './guide_form';
import { fetchGuide, updateGuide } from '../../actions/guide_actions';

const msp = (state, ownProps) => ({
  guide: state.entities.guides[ownProps.match.params.guideId],
  formType: 'Update Guide',
  cities: Object.values(state.entities.cities),
  breweries: Object.values(state.entities.breweries),
});

const mdp = dispatch => ({
  fetchGuide: guideId => dispatch(fetchGuide(guideId)),
  formAction: guide => dispatch(updateGuide(guide)),
});

export default withRouter(connect(msp, mdp)(GuideForm));
