var app = app || {};

(function(module) {
  const mapController = {};

  mapController.init = () => {

    $('#about-title').show();
    $('#home-btn').show();
    $('#about-page').hide();
    $('#about-logo').hide();
    $('#verify-window').hide();
    
  };

  console.log('works')

  module.mapController = mapController;

})(app);