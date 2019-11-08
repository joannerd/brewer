import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BreweriesMap extends React.Component {
  constructor(props) {
    super(props);
    this.map;
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.breweries[0].lat, lng: this.props.breweries[0].lng },
      zoom: 13
    };
    const mapDOMNode = document.getElementById('map');
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  componentDidUpdate() {
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.breweries);
  }

  render() {
    return (
      <div id="map-container" ref="map">
        <h3>Brewery Map:</h3>
        <div id="map" ref={map => this.mapNode = map}>
        </div>
      </div>
    )
  }
}

export default BreweriesMap;