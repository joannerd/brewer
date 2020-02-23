import * as YelpAPIUtil from '../util/yelp_api_util';
export const RECEIVE_YELP = 'RECEIVE_YELP';
export const RECEIVE_YELP_INFO = 'RECEIVE_YELP_INFO';
export const RECEIVE_YELP_REVIEWS = 'RECEIVE_YELP_REVIEWS';

const receiveYelp = yelp => ({
  type: RECEIVE_YELP,
  yelp
});

const receiveYelpInfo = (yelpId, yelpInfo) => ({
  type: RECEIVE_YELP_INFO,
  yelpId,
  yelpInfo
});

const receiveYelpReviews = (yelpId, yelpReviews) => ({
  type: RECEIVE_YELP_REVIEWS,
  yelpId,
  yelpReviews
});

export const fetchYelp = (term, address, city, state) => dispatch => (
  YelpAPIUtil.fetchYelp(term, address, city, state)
    .then(yelp => dispatch(receiveYelp(yelp))
));

export const fetchYelpInfo = yelpId => dispatch => (
  YelpAPIUtil.fetchYelpInfo(yelpId)
    .then((yelpId, yelpInfo) => dispatch(receiveYelpInfo(yelpId, yelpInfo))
));

export const fetchYelpReviews = yelpId => dispatch => (
  YelpAPIUtil.fetchYelpReviews(yelpId)
    .then((yelpId, yelpReviews) => dispatch(receiveYelpReviews(yelpId, yelpReviews))
));