import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BreweryShow from './brewery_show';
import { fetchBrewery } from '../../actions/brewery_actions';
import {
  fetchYelp,
  fetchYelpInfo,
  fetchYelpReviews,
  clearYelp,
} from '../../actions/yelp_actions';

const msp = (state, ownProps) => ({
  brewery: state.entities.breweries[ownProps.match.params.breweryId],
  yelp: Object.values(state.entities.yelp)[0],
  reviews: state.entities.reviews,
});

const mdp = dispatch => ({
  fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId)),
  fetchYelp: (term, address, city, state) => dispatch(fetchYelp(term, address, city, state)),
  fetchYelpInfo: yelpId => dispatch(fetchYelpInfo(yelpId)),
  fetchYelpReviews: yelpId => dispatch(fetchYelpReviews(yelpId)),
  clearYelp: () => dispatch(clearYelp()),
});

export default withRouter(connect(msp, mdp)(BreweryShow));
