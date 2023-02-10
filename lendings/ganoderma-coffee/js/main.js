(function ($) {

    "use strict";
    // animation
    AOS.init({
        offset: 30,
        duration: 1000,
        delay: 100,
        easing: 'ease',
        once: true,
        disable: 'mobile',
    });


    //100vh на телефонах
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });


    //scroll
    $('.nav-link').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top - $('header').height() + "px"
        }, {
            duration: 1000,
            easing: "easeInOutExpo"
        });
    });




    //добавление border для menu при скролле
    const section = $('section'),
        nav = $('.site-navbar'),
        navHeight = nav.outerHeight(); // получаем высоту навигации 

    // поворот экрана 
    // window.addEventListener('orientationchange', function () {
    //     navHeight = nav.outerHeight();
    // }, false);
     
    $(window).on('scroll', function () {
        const position = $(this).scrollTop();

        section.each(function () {
            const top = $(this).offset().top - navHeight - 200,
                bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                nav.find('a').removeClass('active-link');
                section.removeClass('active-section');

                $(this).addClass('active-section');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-link');
            }
        });
    });












    //добавление border для телефонов
    // const section = $('section'),
    const mobilenav = $('.site-mobile-menu')
        // navHeight = nav.outerHeight(); // получаем высоту навигации 

    // поворот экрана 
    // window.addEventListener('orientationchange', function () {
    //     navHeight = nav.outerHeight();
    // }, false);
     
    $(window).on('scroll', function () {
        const position = $(this).scrollTop();

        section.each(function () {
            const top = $(this).offset().top - navHeight,
                bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                mobilenav.find('a').removeClass('active-link');
                section.removeClass('active-section');

                $(this).addClass('active-section');
                mobilenav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-link');
            }
        });
    });


    //Слайдер для отзывов
    var mySwiper = new Swiper('.swiper-container', {
        autoHeight: true,
        loop: true,
        spaceBetween: 70,
        grabCursor: true,
        centeredSlides: true,
        speed: 500,
        // slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    // Индикатор прокрутки
    window.onscroll = function () { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }


    // back-to-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    })


    //mobile-menu
    var siteMenuClone = function () {

        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });


        setTimeout(function () {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $('body').find('.js-menu-toggle').removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $('body').find('.js-menu-toggle').addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                    $('body').find('.js-menu-toggle').removeClass('active');
                }
            }
        });
    };
    siteMenuClone();


    var siteSticky = function () {
        $(".js-sticky-header").sticky({ topSpacing: 0 });
    };
    siteSticky();





    //typed js
    new TypeIt(".subtitle", {
        // strings: "Международная компания Smar&tRich предлагает Вам оценить уникальный вкус кофе и чая!",
        speed: 60,
        waitUntilVisible: true
    }).go();

    new TypeIt(".buy-text", {
        // strings: "Позаботься сегодня о своем благополучии и благополучии своей семьи!",
        speed: 60,
        waitUntilVisible: true
    }).go();

    new TypeIt(".last-text", {
        // strings: "Позаботься сегодня о своем благополучии и благополучии своей семьи!",
        speed: 60,
        waitUntilVisible: true
    }).go();





    $('.more__link').on('click', function() {
        $('.hidden-block').slideToggle();
    });

})(jQuery);
