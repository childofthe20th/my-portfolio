
(function($) {
  $(document).ready(function() {
    $('.logo2').hide();
    // fade out .navbar
    $(function() {
      $(window).scroll(function() {
        // set distance user needs to scroll before we start fadeOut
        if ($(this).scrollTop() > 100) {
          $('.navbar').fadeOut(500);
          $('.logo2').fadeIn(500);
        } else {
          $('.navbar').fadeIn(500);
          $('.logo2').fadeOut(500);
        }
      });
    });
  });
}(jQuery));
