'use strict';

var map = {};
var locations = [];

function initMap() {
  //Some of the code syntax used was given by the google maps API website.
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 47.608013, lng: -122.335167 },
    zoom: 12,
    mapTypeId: 'roadmap'
  });


}
