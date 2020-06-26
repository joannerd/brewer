import 'regenerator-runtime';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MarkerManager from './marker_manager';

const Map = ({ cities, guide }) => {
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
    }

    if (cities) {
      const places = {};
      Object.keys(cities).forEach((cityId) => {
        const city = cities[cityId];
        places[cityId] = [city.lng, city.lat];
      });
      generateMap(places, 3, [-95, 38]);
    }
  }, [cities, guide]);

  return (
    <div id="map-container">
      <div id="map" />
    </div>
  );
};

Map.propTypes = {
  cities: PropTypes.object,
  guide: PropTypes.object,
};

Map.defaultProps = {
  cities: undefined,
  guide: undefined,
};

export default Map;
