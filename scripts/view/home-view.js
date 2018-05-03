
// Show verify popup on page load
if (localStorage.getItem('over 21', true)) {
  // app.get('*', (req, res) => res.redirect(CLIENT_URL));
}
else {

  $(function(){
    $('.container').hide();
    $('#verify-window').css('display', 'block');
  });



  $('#over-21').on('click', function(e) {
    e.preventDefault();
    let over21 = localStorage.setItem('over 21', true);
    location.reload();
    // $('.container').show();
    // $('#verify-window').hide();


  });
}
// var age = 26;
// var canDrinkAlcohol = (age > 21) ? 'True, over 21' : 'False, under 21';
// console.log(canDrinkAlcohol); // "True, over 21"
