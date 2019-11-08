import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    mapboxgl.accessToken = window.mboxAPIKey;
    var map = new mapboxgl.Map({
      container: 'map',
      minZoom: 3,
      center: [-97.473672, 39.596918],
      style: 'mapbox://styles/mapbox/dark-v9' });
  }

  render() {
    return (
      <div id="map-container">
        <div id='map'></div>
      </div>
    )
  }
}

export default Map;