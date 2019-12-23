import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const msp = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  userGuides: Object.values(state.entities.guides),
  userFavBrews: Object.values(state.entities.breweries),
});

const mdp = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default withRouter(connect(msp, mdp)(Profile));