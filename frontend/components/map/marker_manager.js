class MarkerManager {
  constructor(map) {
    this.map = map;
    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromPlace = this.createMarkerFromPlace.bind(this);
  }

  createMarkerFromPlace(id, coordinates) {
    const el = document.createElement('div');
    el.className = `marker ${id}`;
    el.id = id;

    new mapboxgl.Marker(el)
      .setLngLat(coordinates)
      .addTo(this.map);
  }

  updateMarkers(places) {
    Object.keys(places).forEach(placeId => {
      let place = places[placeId]
      this.createMarkerFromPlace(placeId, place);
    });
  }
}

export default MarkerManager;