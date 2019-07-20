import GoogleMapsLoader from 'google-maps';
import './img/pin.png';

class Map {
  constructor(mapElement) {
    this.$mapElement = mapElement.find('.map__container');
    this.lat = this.$mapElement.data('lat');
    this.lng = this.$mapElement.data('lng');

    this.init();
  }

  init() {
    GoogleMapsLoader.KEY = 'AIzaSyC_M2Pwf2qVeiWWUP0MuXOwOGPjTaVguAI';

    GoogleMapsLoader.load((google) => {
      const position = { lat: +this.lat, lng: +this.lng };

      const options = {
        center: position,
        zoom: 15,
      };

      const map = new google.maps.Map((this.$mapElement)[0], options);
      new google.maps.Marker({
        position,
        map,
        icon: './images/pin.png',
      });
    });
  }
}

export default Map;
