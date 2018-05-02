
// Show verify popup on page load
if (localStorage.getItem('over 21', true)) {
  // app.get('*', (req, res) => res.redirect(CLIENT_URL));
}
else {

  $(function(){
    $('.container').hide();
    $('#verify-window').css('display', 'block');
    $('#home-logo').show();
  });


  $('#under-21').on('click', function(e) {
    e.preventDefault();
    window.location.href = 'https://www.oldtimecandy.com/walk-the-candy-aisle/candy-cigarettes/'
  });

  $('#over-21').on('click', function(e) {
    e.preventDefault();
    let over21 = localStorage.setItem('over 21', true);
    location.reload();
    // $('.container').show();
    // $('#verify-window').hide();
  });
}
// 'use strict';

// var app = app || {};

// (function(module) {
//   const homeController = {};

//   homeController.init = () => {

//     $('.container').hide();
//     $('#verify-window').css('display', 'block');
//   };

//   console.log('works');

//   module.homeController = homeController;

// })(app);
