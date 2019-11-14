import React from 'react';
import MarkerManager from './marker_manager';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map;
  }
  
  componentDidMount() {
    const { cityLng, cityLat, breweryLocations } = this.props.guide;
    mapboxgl.accessToken = window.mboxAPIKey;

    const mapOptions = {
      container: 'map',
      minZoom: 10,
      center: [cityLng, cityLat],
      style: 'mapbox://styles/mapbox/dark-v9'
    };
    this.map = new mapboxgl.Map(mapOptions)

    const markerPlaces = Object.values(breweryLocations);

    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(markerPlaces)
  }


  render() {
    if (this.props.guide === undefined) return null;

    return (
      <div id="map-container">
        <div id='map'></div>
      </div>
    )
  }
}

export default Map;