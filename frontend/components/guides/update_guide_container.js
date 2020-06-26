import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGuide, updateGuide } from '../../actions/guide_actions';
import GuideForm from './guide_form';

const msp = ({ entities }, ownProps) => ({
  guide: entities.guides[ownProps.match.params.guideId],
  formType: 'Update Guide',
  cities: Object.values(entities.cities),
  breweries: Object.values(entities.breweries),
});

const mdp = dispatch => ({
  fetchGuide: guideId => dispatch(fetchGuide(guideId)),
  formAction: guide => dispatch(updateGuide(guide)),
});

export default withRouter(connect(msp, mdp)(GuideForm));
