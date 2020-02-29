import * as YelpAPIUtil from '../util/yelp_api_util';
export const RECEIVE_YELP = 'RECEIVE_YELP';
export const RECEIVE_YELP_INFO = 'RECEIVE_YELP_INFO';
export const RECEIVE_YELP_REVIEWS = 'RECEIVE_YELP_REVIEWS';
export const CLEAR_YELP = 'CLEAR_YELP';

const receiveYelp = yelp => ({
  type: RECEIVE_YELP,
  yelp
});

const receiveYelpInfo = yelpInfo => ({
  type: RECEIVE_YELP_INFO,
  yelpInfo
});

const receiveYelpReviews = yelp => ({
  type: RECEIVE_YELP_REVIEWS,
  yelp
});

export const clearYelp = () => ({
  type: CLEAR_YELP
});

export const fetchYelp = (term, address, city, state) => () => (
  YelpAPIUtil.fetchYelp(term, address, city, state)
    .then(yelp => receiveYelp(yelp))
);

export const fetchYelpInfo = yelpId => dispatch => (
  YelpAPIUtil.fetchYelpInfo(yelpId)
    .then(yelpInfo => dispatch(receiveYelpInfo(yelpInfo))
));

export const fetchYelpReviews = yelpId => dispatch => (
  YelpAPIUtil.fetchYelpReviews(yelpId)
    .then(yelp => dispatch(receiveYelpReviews(yelp))
));