'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = () => {

    $('.container').hide();
    $('#about-page').show();
    
  };

  console.log('works')

  module.aboutController = aboutController;

})(app);