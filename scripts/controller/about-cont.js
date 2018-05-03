'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = () => {

    $('.container').hide();
    $('#home-logo').show();
    $('#about-page').show();
    $('#nav-btn').show();
    $('#nav-btn2').show();
  };

  console.log('works');

  module.aboutController = aboutController;

})(app);