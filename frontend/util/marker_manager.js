export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromBench = this.createMarkerFromBench.bind(this);
  }

  createMarkerFromBench(bench) {
    const myPos = { lat: bench.lat, lng: bench.lng };
    const marker = new google.maps.Marker({
      position: myPos,
      map: this.map,
      title: bench.description
    });

    this.markers[bench.id] = marker;

    const infowindow = new google.maps.InfoWindow({
      content: bench.description
    });

    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
    });
  }

  updateMarkers(benches) {
    benches.map(bench => (this.createMarkerFromBench(bench)));
  }
}