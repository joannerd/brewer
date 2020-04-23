import 'regenerator-runtime';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MarkerManager from './marker_manager';

const Map = ({ cities, guide }) => {
  const [mapZoom, setMapZoom] = useState();
  const [mapCenter, setMapCenter] = useState();

  const generateMap = (places, minZoom, center) => {
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
    mapboxgl.accessToken = window.mboxAPIKey;

    if (cities) {
      const places = {};
      Object.keys(cities).forEach((cityId) => {
        const city = cities[cityId];
        places[cityId] = [city.lng, city.lat];
      });
      setMapZoom(3);
      setMapCenter([-98, 38]);
      generateMap(places, mapZoom, mapCenter);
    }

    if (guide) {
      const { cityLng, cityLat, brewInfo } = guide;
      setMapZoom(11.5);
      setMapCenter([cityLng, cityLat]);
      generateMap(brewInfo, mapZoom, mapCenter);
    }
  }, [cities, guide]);

  return (
    <div id="map-container">
      <div id="map" />
    </div>
  );
};

Map.propTypes = {
  cities: PropTypes.array,
  guide: PropTypes.object,
};

Map.defaultProps = {
  cities: undefined,
  guide: undefined,
};

export default Map;
