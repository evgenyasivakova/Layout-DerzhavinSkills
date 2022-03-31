// Слайдер
$(document).ready(function() {
  const swiper = new Swiper('.teach-swiper', {
    loop: true,
    spaceBetween: 20,
    
    pagination: {
      el: '.teach-content .swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {

      310: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 3,
      },
    },
    
  });

  const swipers = new Swiper('.teacher-swiper', {
    loop: true,
    spaceBetween: 20,

    pagination: {
      el: '.teacher-content .swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      310: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 3,
      },
    },

  });

  $(document).on('click','.hamburger:not(.active)', function() {
    $(this).addClass('active');
    $('.menu').addClass('active');
    $('body,html').addClass('fixed');
  });
  $(document).on('click','.hamburger.active', function() {
    $(this).removeClass('active');
    $('.menu').removeClass('active');
    $('body,html').removeClass('fixed');
  });


  function CloseMenu() {
    $('.hamburger').removeClass('active');
    $('.menu').removeClass('active');
    $('body,html').removeClass('fixed');
}



  $("a.menu-link").click(function() {
     $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
     }, {
        duration: 1000,
        easing: "swing"
     });
     CloseMenu();
     return false;
  });

$(".paroller, [data-paroller-factor]").paroller({
                        factor: 0.1,            // multiplier for scrolling speed and offset
                        factorXs: 3,           // multiplier for scrolling speed and offset
                        type: 'foreground',     // background, foreground
                        direction: 'horizontal', // vertical, horizontal
                        transition: 'transform 0.1s ease' // CSS transition
                    });
});

