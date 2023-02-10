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
        scrollTop: $($(this).attr('href')).offset().top - 100,
      },
      {
        duration: 1000,
        easing: 'easeInOutExpo',
      },
    );
  });

  // $('.menu-bar').on('click', function (e) {
  //   e.preventDefault();
  //   $('.overlay').toggleClass('active');
  //   $('.mobile-menu').toggleClass('active');
  // });
  // $('.overlay').on('click', function () {
  //   $('.overlay').toggleClass('active');
  //   $('.mobile-menu').toggleClass('active');
  // });
  // $('.close-menu').on('click', function () {
  //   $('.overlay').toggleClass('active');
  //   $('.mobile-menu').toggleClass('active');
  // });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.navbar').addClass('nav-sticky');
    } else {
      $('.navbar').removeClass('nav-sticky');
    }
  });
})(jQuery);
