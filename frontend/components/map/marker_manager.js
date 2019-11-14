class MarkerManager {
  constructor(map) {
    this.map = map;
    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromPlace = this.createMarkerFromPlace.bind(this);
  }

  createMarkerFromPlace(coordinates) {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat(coordinates)
      .addTo(this.map);
  }

  updateMarkers(places) {
    places.map(place => (this.createMarkerFromPlace(place)));
  }
}

export default MarkerManager;