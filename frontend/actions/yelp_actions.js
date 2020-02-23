import * as YelpAPIUtil from '../util/yelp_api_util';
export const RECEIVE_YELP = 'RECEIVE_YELP';

const receiveYelp = yelp => ({
  type: RECEIVE_YELP,
  yelp
});

export const fetchYelp = yelpId => dispatch => (
  YelpAPIUtil.fetchYelp(yelpId)
    .then(yelp => dispatch(receiveYelp(yelp))
));