(function ($) {
  'use strict';

  //aos
  AOS.init({
    offset: 150,
    duration: 1000,
    easing: 'ease-in-out-back',
    once: true,
  });

  //scroll
  $('nav a').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top - 100,
      },
      {
        duration: 1000,
        easing: 'easeInOutExpo',
      },
    );
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.navbar').addClass('nav-sticky');
    } else {
      $('.navbar').removeClass('nav-sticky');
    }
  });
})(jQuery);
