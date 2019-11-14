import React from 'react';
import MarkerManager from './marker_manager';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map;
  }
  
  componentDidMount() {
    this.props.fetchGuide(this.props.match.params.guideId);
    mapboxgl.accessToken = window.mboxAPIKey;

    const mapOptions = {
      container: 'map',
      minZoom: 10,
      center: [this.props.guide.cityLng, this.props.guide.cityLat],
      style: 'mapbox://styles/mapbox/dark-v9'
    };
    this.map = new mapboxgl.Map(mapOptions)
  }

  componentDidUpdate() {

    const markerPlaces = Object.values(this.props.places);

    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(markerPlaces)
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