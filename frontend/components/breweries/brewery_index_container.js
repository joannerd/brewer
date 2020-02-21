import { connect } from "react-redux";
import BreweryIndex from './brewery_index';
import { fetchBreweries } from '../../actions/brewery_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => ({
  breweries: Object.values(state.entities.breweries)
})

const mdp = dispatch => ({
  fetchBreweries: () => dispatch(fetchBreweries()),
})

export default withRouter(connect(msp, mdp)(BreweryIndex));