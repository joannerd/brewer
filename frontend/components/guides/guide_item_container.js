// import { connect } from 'react-redux';
// import Guide from './guide_index_item';
// import { fetchGuide, fetchGuides, deleteGuide } from '../../actions/guide_actions';
// import { fetchBreweries } from '../../actions/brewery_actions';

// const msp = (state, ownProps) => {
//   return({
//     breweries: Object.values(state.entities.breweries)
//   })
// };

// const mdp = dispatch => ({
//   fetchBreweries: () => dispatch(fetchBreweries()),
//   fetchGuide: guideId => dispatch(fetchGuide(guideId)),
//   deleteGuide: guideId => dispatch(deleteGuide(guideId))
// })

// export default connect(msp, mdp)(Guide);