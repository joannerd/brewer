import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBrewery } from '../../actions/brewery_actions';
import {
  fetchYelp,
  fetchYelpInfo,
  fetchYelpReviews,
  clearYelp,
} from '../../actions/yelp_actions';
import BreweryShow from './brewery_show';

const msp = ({ entities }, ownProps) => ({
  brewery: entities.breweries[ownProps.match.params.breweryId],
  yelp: Object.values(entities.yelp)[0],
  reviews: entities.reviews,
});

const mdp = dispatch => ({
  fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId)),
  fetchYelp: (term, address, city, state) => dispatch(fetchYelp(term, address, city, state)),
  fetchYelpInfo: yelpId => dispatch(fetchYelpInfo(yelpId)),
  fetchYelpReviews: yelpId => dispatch(fetchYelpReviews(yelpId)),
  clearYelp: () => dispatch(clearYelp()),
});

export default withRouter(connect(msp, mdp)(BreweryShow));
