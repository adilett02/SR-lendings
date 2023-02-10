(function ($) {
  'use strict';
  $('.nonloop-block-13').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 20,
    autoplay: true,
    autoHeight: true,
    nav: true,
    navText: ['‹', '›'],
  });

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
        scrollTop: $($(this).attr('href')).offset().top,
      },
      {
        duration: 1000,
        easing: 'easeInOutExpo',
      },
    );
  });

  $('.menu-bar').on('click', function (e) {
    e.preventDefault();
    $('nav').toggleClass('hide-menu');
    $(this).toggleClass('active');
  });
})(jQuery);
