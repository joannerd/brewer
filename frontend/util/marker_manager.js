export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromPlace = this.createMarkerFromPlace.bind(this);
  }

  createMarkerFromPlace(place) {
    // const myPos = { lat: place.lat, lng: place.lng };
    const myPos = { lat: 39.596918, lng: -97.473672 };
    const marker = new google.maps.Marker({
      position: myPos,
      map: this.map,
      title: place.name
    });

    this.markers[place.id] = marker;

    const infowindow = new google.maps.InfoWindow({
      content: `${place.name}`
    });

    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
    });
  }

  updateMarkers(places) {
    places.map(place => (this.createMarkerFromPlace(place)));
  }
}