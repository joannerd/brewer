import fetchSearchBreweries from '../util/search_api_util';

export const RECEIVE_SEARCH_BREWERIES = 'RECEIVE_SEARCH_BREWERIES';

const receiveSearchBreweries = breweries => ({
  type: RECEIVE_SEARCH_BREWERIES,
  breweries,
});

export const fetchSearchEntities = () => dispatch => (
  fetchSearchBreweries()
    .then(breweries => dispatch(receiveSearchBreweries(breweries))));
