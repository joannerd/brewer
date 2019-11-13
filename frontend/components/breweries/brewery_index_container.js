import { connect } from "react-redux";
import BreweryIndex from './brewery_index';
import { fetchBreweries, fetchBrewery } from '../../actions/brewery_actions';

const msp = (state) => ({
  breweries: Object.values(state.entities.breweries)
})

const mdp = dispatch => ({
  fetchBreweries: () => dispatch(fetchBreweries()),
  fetchBrewery: (breweryId) => dispatch(fetchBrewery(breweryId))
})

export default connect(msp, mdp)(BreweryIndex)