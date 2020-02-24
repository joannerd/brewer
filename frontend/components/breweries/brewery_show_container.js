import { connect } from "react-redux";
import BreweryShow from './brewery_show';
import { fetchBrewery } from '../../actions/brewery_actions';
import {
  fetchYelp,
  fetchYelpInfo,
  fetchYelpReviews
} from "../../actions/yelp_actions";
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
  brewery: state.entities.breweries[ownProps.match.params.breweryId],
  yelp: Object.values(state.entities.yelp),
  reviews: state.entities.reviews
});

const mdp = dispatch => ({
  fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId)),
  fetchYelp: (term, address, city, state) => dispatch(fetchYelp(term, address, city, state)),
  fetchYelpInfo: yelpId => dispatch(fetchYelpInfo(yelpId)),
  fetchYelpReviews: yelpId => dispatch(fetchYelpReviews(yelpId))
});

export default withRouter(connect(msp, mdp)(BreweryShow));