import React from 'react';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
  constructor(props) {
    super(props);
    // this.map;
  }

  componentDidMount() {
    // const mapOptions = {
    //   center: { lat: 39.596918, lng: -97.473672 },
    //   zoom: 4
    // };
    // const mapDOMNode = document.getElementById('map');
    // this.map = new google.maps.Map(mapDOMNode, mapOptions);
    mapboxgl.accessToken = 'pk.eyJ1IjoianVubmFjIiwiYSI6ImNrMnFmcHE5NDAyNDYzY28ybjV5NzJnenIifQ.UbQJU4Hl2GDgnv-U-OGizw';
    var map = new mapboxgl.Map({
      container: 'map',
      minZoom: 3,
      center: [-97.473672, 39.596918],
      style: 'mapbox://styles/mapbox/dark-v9' });
  }

  // componentDidUpdate() {
  //   this.MarkerManager = new MarkerManager(this.map);
  //   this.MarkerManager.updateMarkers(this.props.places);
  // }

  render() {
    return (
      // <div id="map-container" ref="map">
      //   <div id="map" ref={map => this.mapNode = map}></div>
      // </div>
      <div id="map-container">
        <div id='map'></div>
      </div>
    )
  }
}

export default Map;