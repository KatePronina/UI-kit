/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function initMap() {
    var uluru = {lat: 37.796189, lng: -122.415034};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: require('./img/pin.png')
      });
}

window.initMap = initMap;