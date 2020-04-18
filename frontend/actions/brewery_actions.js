import * as BreweryAPIUtil from '../util/brewery_api_util';

export const RECEIVE_ALL_BREWERIES = 'RECEIVE_ALL_BREWERIES';
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY';

const receiveAllBreweries = (breweries) => ({
  type: RECEIVE_ALL_BREWERIES,
  breweries,
});

const receiveBrewery = (brewery) => ({
  type: RECEIVE_BREWERY,
  brewery,
});

export const fetchBreweries = () => dispatch => (
  BreweryAPIUtil.fetchBreweries()
    .then(breweries => dispatch(receiveAllBreweries(breweries))));

export const fetchBrewery = (breweryId) => dispatch => (
  BreweryAPIUtil.fetchBrewery(breweryId)
    .then(brewery => dispatch(receiveBrewery(brewery))));
