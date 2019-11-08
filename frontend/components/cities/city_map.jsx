import React from 'react';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map;
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 39.596918, lng: -97.473672 },
      zoom: 4
    };
    const mapDOMNode = document.getElementById('map');
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  componentDidUpdate() {
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.places);
  }

  render() {
    return (
      <div id="map-container" ref="map">
        <h3>City Map:</h3>
        <div id="map" ref={map => this.mapNode = map}>
        </div>
      </div>
    )
  }
}

export default Map;