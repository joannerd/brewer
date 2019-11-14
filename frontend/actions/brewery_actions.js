import * as BreweryAPIUtil from '../util/brewery_api_util';
export const RECEIVE_ALL_BREWERIES = 'RECEIVE_ALL_BREWERIES';
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY';
import { receiveErrors } from './session_actions';

const receiveAllBreweries = (breweries) => ({
  type: RECEIVE_ALL_BREWERIES,
  breweries
});

const receiveBrewery = (brewery) => ({
  type: RECEIVE_BREWERY,
  brewery
});

export const fetchBreweries = () => dispatch => (
  BreweryAPIUtil.fetchBreweries()
    .then(breweries => dispatch(receiveAllBreweries(breweries)),
      errors => dispatch(receiveErrors(errors)))
);

export const fetchBrewery = (breweryId) => dispatch => (
  BreweryAPIUtil.fetchBrewery(breweryId)
    .then(brewery => dispatch(receiveBrewery(brewery)),
      errors => dispatch(receiveErrors(errors)))
);