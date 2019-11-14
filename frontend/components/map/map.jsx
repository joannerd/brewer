import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    debugger
    const { places, placeIds} = this.props;

    let centerLng = 0;
    let centerLat = 0;

    for (let i = 0; i < places.length; i++) {
       centerLng += places[i][0];
       centerLat += places[i][1];
    }

    mapboxgl.accessToken = window.mboxAPIKey;
    const map = new mapboxgl.Map({
      container: 'map',
      minZoom: 3,
      center: [-97.473672, 39.596918],
      // center: [(centerLng/places.length), (centerLat/places.length)],
      style: 'mapbox://styles/mapbox/dark-v9' })

    placeIds.forEach(id => {
      const el = document.createElement('div');
      el.className = 'marker';

      const coordinates = places[id]

      new mapboxgl.Marker(el)
        .setLngLat(coordinates)
        .addTo(map);
    });

    this.setState(this.props.places)
  }

  render() {
    debugger
    return (
      <div id="map-container">
        <div id='map'></div>
      </div>
    )
  }
}

Map.defaultProps = {
  places: [],
  placeIds: []
}


export default Map;