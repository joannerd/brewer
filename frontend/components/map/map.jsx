import React from 'react';
import MarkerManager from './marker_manager';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.MarkerManager;
  }
  
  componentDidMount() {
    let mapOptions;
    let mapbox;
    let places;
    mapboxgl.accessToken = window.mboxAPIKey;

    if (Object.keys(this.props.cities).length !== 0) {     
      places = this.props.cities;
      mapOptions = {
        container: 'map',
        minZoom: 3,
        center: [-98, 38],
        style: 'mapbox://styles/mapbox/dark-v9'
      };
    } else {
      const { cityLng, cityLat, brewInfo } = this.props.guide;
      places = brewInfo;
      mapOptions = {
        container: 'map',
        minZoom: 11.5,
        center: [cityLng, cityLat],
        style: 'mapbox://styles/mapbox/dark-v9'
      };
    }

    mapbox = new mapboxgl.Map(mapOptions);
    this.MarkerManager = new MarkerManager(mapbox);
    this.MarkerManager.updateMarkers(places);
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