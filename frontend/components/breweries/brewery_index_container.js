import { connect } from "react-redux";
import BreweryIndex from './brewery_index';
import { fetchBreweries } from '../../actions/brewery_actions';

const msp = (state) => ({
  breweries: Object.values(state.entities.breweries)
})

const mdp = dispatch => ({
  fetchBreweries: () => dispatch(fetchBreweries())
})

export default connect(msp, mdp)(BreweryIndex)