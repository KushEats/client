'use strict';

var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = () => {

    $('.container').hide();
    $('#verify-window').css('display', 'block');
  };

  console.log('works')

  module.homeController = homeController;

})(app);