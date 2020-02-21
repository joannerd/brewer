import { connect } from "react-redux";
import BreweryIndexItem from './brewery_index_item';
import { fetchBrewery } from '../../actions/brewery_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
  brewery: state.entities.breweries[ownProps.match.params.breweryId]
});

const mdp = dispatch => ({
  fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId))
});

export default withRouter(connect(msp, mdp)(BreweryIndexItem));