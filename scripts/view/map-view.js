'use strict';

var map = {};
// var locations = [];

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 47.608013, lng: -122.335167 },
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }

    // Clear out the old markers.

    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    markers = [];

    console.log('inside map view', app.Stores.all);

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (!place.geometry) {
        console.log('Returned place contains no geometry');
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      let insertMapCoordinates = (i, iconUrl) => app.Stores.all[i].forEach(storeObj => {
        var coordinated = {
          lat: storeObj.coordinates.latitude,
          lng: storeObj.coordinates.longitude,
        };
        markers.push(new google.maps.Marker({
          icon: iconUrl,
          title: storeObj.name,
          url: storeObj.url,
          position: coordinated,
          map: map,
        })
        );
      }
      );
      insertMapCoordinates(0, '../../img/resized-icon.png');
      insertMapCoordinates(1, '../../img/food-icon-resize.png');

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

    markers.forEach(marker => {
      marker.addListener('click', function () {
        let infoWindow = new google.maps.InfoWindow({
          content: `<a class ="infoWindow" href="${this.url}" target="_blank">${this.title}</a>`
        });
        infoWindow.open(map, marker);
      });
    });

    map.fitBounds(bounds);
  });
}
