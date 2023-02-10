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
        scrollTop: $($(this).attr('href')).offset().top - 90,
      },
      {
        duration: 1000,
        easing: 'easeInOutExpo',
      },
    );
  });

  $('.menu-bar').on('click', function (e) {
    e.preventDefault();
    $('.overlay').toggleClass('active');
    $('.mobile-menu').toggleClass('active');
  });
  $('.overlay').on('click', function () {
    $('.overlay').toggleClass('active');
    $('.mobile-menu').toggleClass('active');
  });
  $('.close-menu').on('click', function () {
    $('.overlay').toggleClass('active');
    $('.mobile-menu').toggleClass('active');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.header').addClass('nav-sticky');
    } else {
      $('.header').removeClass('nav-sticky');
    }
  });

  $(document).ready(function () {
    $('#fullpage').fullpage({
      //options here
      autoScrolling: true,
      scrollHorizontally: true,
      licenseKey: ' C7F41B00-5E824594-9A5EFB99-B556A3D5',
      anchors: ['slide01', 'slide02', 'slide03', 'slide04', 'slide05', 'slide06', 'slide07'],
      // menu: '#nav',
      lazyLoad: true,
      navigation: true,
      navigationPosition: 'right',
      // scrollOverflow: true,
      responsiveWidth: 992,
      responsiveHeight: 600,
      responsiveSlides: true,
    });

    //methods
    // $.fn.fullpage.setAllowScrolling(false);
  });

  // var myFullpage = new fullpage('#fullpage', {
  //   sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
  // });
})(jQuery);
