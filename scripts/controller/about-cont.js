'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = () => {
    $('#about-logo').show();
    $('.container').hide();
    $('#about-page').show();
    $('#logo').hide()
    $('#about1-title').hide();
    $('#home1-btn').hide();
  };

  console.log('works')

  module.aboutController = aboutController;

})(app);