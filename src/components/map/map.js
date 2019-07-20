/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function initMap() {
    var mapElement = document.getElementById('map');

    var uluru = {lat: +mapElement.dataset.lat, lng: +mapElement.dataset.lng};

    var map = new google.maps.Map(mapElement, {
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
