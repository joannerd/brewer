import * as YelpAPIUtil from '../util/yelp_api_util';
export const RECEIVE_YELP = 'RECEIVE_YELP';
export const RECEIVE_YELP_INFO = 'RECEIVE_YELP_INFO';
export const RECEIVE_YELP_REVIEWS = 'RECEIVE_YELP_REVIEWS';

const receiveYelp = yelpId => ({
  type: RECEIVE_YELP,
  yelpId
});

const receiveYelpInfo = yelpInfo => ({
  type: RECEIVE_YELP_INFO,
  yelpInfo
});

const receiveYelpReviews = yelpReviews => ({
  type: RECEIVE_YELP_REVIEWS,
  yelpReviews
});

export const fetchYelp = (term, address, city, state) => dispatch => (
  YelpAPIUtil.fetchYelp(term, address, city, state)
    .then(yelp => dispatch(receiveYelp(yelp))
));

export const fetchYelpInfo = yelpId => dispatch => (
  YelpAPIUtil.fetchYelpInfo(yelpId)
    .then(yelpInfo => dispatch(receiveYelpInfo(yelpInfo))
));

export const fetchYelpReviews = yelpId => dispatch => (
  YelpAPIUtil.fetchYelpReviews(yelpId)
    .then(yelpReviews => dispatch(receiveYelpReviews(yelpReviews))
));