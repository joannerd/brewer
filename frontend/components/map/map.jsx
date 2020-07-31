import 'regenerator-runtime';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MarkerManager from './marker_manager';
import { fetchCities, clearCities } from '../../actions/city_actions';
import Loading from '../loading';

const Map = ({ guide }) => {
  const dispatch = useDispatch();
  const cities = useSelector(state => Object.values(state.entities.cities));

  const generateMap = (places, minZoom, center) => {
    mapboxgl.accessToken = localStorage.getItem('mboxToken');
    const mapOptions = {
      container: 'map',
      minZoom,
      center,
      style: 'mapbox://styles/mapbox/dark-v9',
    };

    const mapbox = new mapboxgl.Map(mapOptions);
    const mapMarkerManager = new MarkerManager(mapbox);
    mapMarkerManager.updateMarkers(places);
  };

  useEffect(() => {
    if (guide) {
      const { cityLng, cityLat, brewInfo } = guide;
      generateMap(brewInfo, 11.5, [cityLng, cityLat]);
    } else {
      dispatch(fetchCities());
    }

    return () => dispatch(clearCities());
  }, [guide]);

  useEffect(() => {
    if (cities.length) {
      const places = {};
      cities.forEach((city) => {
        places[city.id] = [city.lng, city.lat];
      });
      generateMap(places, 3, [-95, 38]);
    }
  }, [cities]);

  return (!guide && !cities.length) ? <Loading /> : (
    <div id="map-container">
      <div id="map" />
    </div>
  );
};

Map.propTypes = {
  guide: PropTypes.object,
};

Map.defaultProps = {
  guide: undefined,
};

export default Map;
