import * as CityAPIUtil from '../util/city_api_util';

export const RECEIVE_ALL_CITIES = 'RECEIVE_ALL_CITIES';
export const RECEIVE_CITY = 'RECEIVE_CITY';
export const CLEAR_CITIES = 'CLEAR_CITIES';

const receiveAllCities = (cities) => ({
  type: RECEIVE_ALL_CITIES,
  cities,
});

const receiveCity = (payload) => ({
  type: RECEIVE_CITY,
  payload,
});

export const clearCities = () => ({
  type: CLEAR_CITIES,
});

export const fetchCities = () => dispatch => (
  CityAPIUtil.fetchCities()
    .then(cities => dispatch(receiveAllCities(cities)))
);

export const fetchCity = (cityId) => dispatch => (
  CityAPIUtil.fetchCity(cityId)
    .then(payload => dispatch(receiveCity(payload)))
);
