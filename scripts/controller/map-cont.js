'use strict';

var app = app || {};

(function(module) {
  const mapController = {};

  mapController.init = () => {

    $('.container').hide();
    $('#pac-input').show();
    $('#home-logo').show();
    $('#map').show();
    $('#nav-btn').show();
    $('#nav-btn2').show();
  };


  module.mapController = mapController;

})(app);