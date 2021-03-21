//$('window').click = function (event) {
//  if (event.target == $('.headerMobileMenu')) {
//    console.log('jfd')
//    //    $('.active').css('display', 'none')
//  }
//};
//$('.headerMobileMenu').click(function (event) {
//  if (event.target === y) {
//    console.log('dc')
//  }
//$('.headerMobileMenu').removeClass('active');
//$('.underHeader, .sessions, .photoSlider, .txtUnderSlider, .reviews, .backPhoto, .blog, footer').css('opacity', '1');
//$('.topBut').css({
//  'transform': 'rotate(0deg)',
//  'top': '0px'
//});
//$('.buttomBut').css({
//  'transform': 'rotate(0deg)',
//  'bottom': '0px'
//});
//$('.centerBut').css('display', 'block');
//
//});

import '../node_modules/slick-carousel/slick/slick';
//import "../node_modules/slick-carousel/slick/slick-theme";


// - слик слайдер
$('.slider-for').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

$('.sliderIndividual').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

$('.sliderGroup').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});


//- найстройка кнопки меню
if ($(window).width() > 768) {
  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 30 && sc < 90) {
      $("header").addClass("opacity")
    } else {
      if (sc < 30) {
        $("header").removeClass("opacity")
      }
    }

    if (sc > 100) {
      $("header").addClass("headFixed");
      $('.underHeader').css('margin', '80px 0 0 0');
      //      if ($(window).width() < 415) {
      //          $('.underHeader').css('margin', '70px 0 0 0');
      //    
      //        }
    } else {
      $("header").removeClass("headFixed");
      $('.underHeader').css('margin', '0px 0 0 0');
    }
  })
} else {
  if ($(window).width() < 415) {
    $("header").addClass("headFixed");
    $('.underHeader').css('margin', '70px 0 0 0');
  } else {
    $("header").addClass("headFixed");
    $('.underHeader').css('margin', '80px 0 0 0');
  }
}



$(document).ready(function () {

  $('.buttonMenu').click(function (event) {
    //- вешаем на меню класс актив и меняем вид кнопки "меню"
    $('.headerMobileMenu').toggleClass('active');
    if ($('.headerMobileMenu').css('display') === 'block') {
      $('.topBut').css({
        'transform': 'rotate(45deg)',
        'top': '8px'
      });
      $('.buttomBut').css({
        'transform': 'rotate(-45deg)',
        'bottom': '8px'
      });
      $('.centerBut').css('display', 'none');

      //      $('.underHeader, .sessions, .photoSlider, .txtUnderSlider, .reviews, .backPhoto, .blog, footer').css('opacity', '0.5');
    } else {
      $('.topBut').css({
        'transform': 'rotate(0deg)',
        'top': '0px'
      });
      $('.buttomBut').css({
        'transform': 'rotate(0deg)',
        'bottom': '0px'
      });
      $('.centerBut').css('display', 'block');

      //      $('.underHeader, .sessions, .photoSlider, .txtUnderSlider, .reviews, .backPhoto, .blog, footer').css('opacity', '1')
    }
  })
});

$('.Individuals').click(function () {
  if ($(window).width() < 769) {
    $('.headerMobileMenu').toggleClass('active');
  }
  $('html, body').animate({
    scrollTop: $(".sessions").offset().top
  }, 600);
  $('.topBut').css({
    'transform': 'rotate(0deg)',
    'top': '0px'
  });
  $('.buttomBut').css({
    'transform': 'rotate(0deg)',
    'bottom': '0px'
  });
  $('.centerBut').css('display', 'block');
});

$('.Companies').click(function () {
  if ($(window).width() < 769) {
    $('.headerMobileMenu').toggleClass('active');
  }
  $('html, body').animate({
    scrollTop: $(".sessions").offset().top
  }, 600);
  $('.topBut').css({
    'transform': 'rotate(0deg)',
    'top': '0px'
  });
  $('.buttomBut').css({
    'transform': 'rotate(0deg)',
    'bottom': '0px'
  });
  $('.centerBut').css('display', 'block');
});

$('.TheStudio').click(function () {
  if ($(window).width() < 769) {
    $('.headerMobileMenu').toggleClass('active');
  }
  $('html, body').animate({
    scrollTop: $(".photoSlider").offset().top
  }, 600);
  $('.topBut').css({
    'transform': 'rotate(0deg)',
    'top': '0px'
  });
  $('.buttomBut').css({
    'transform': 'rotate(0deg)',
    'bottom': '0px'
  });
  $('.centerBut').css('display', 'block');
});

$('.AboutUs').click(function () {

  if ($(window).width() < 769) {
    $('.headerMobileMenu').toggleClass('active');
  }
  $('html, body').animate({
    scrollTop: $(".txtUnderSlider").offset().top
  }, 600);
  $('.topBut').css({
    'transform': 'rotate(0deg)',
    'top': '0px'
  });
  $('.buttomBut').css({
    'transform': 'rotate(0deg)',
    'bottom': '0px'
  });
  $('.centerBut').css('display', 'block');
});

//$('.AboutUs').click(function () {
//  $('.headerMobileMenu').toggleClass('active');
//  $('html, body').animate({
//    scrollTop: $(".txtUnderSlider").offset().top
//  }, 600);
//  $('.topBut').css({
//    'transform': 'rotate(0deg)',
//    'top': '0px'
//  });
//  $('.buttomBut').css({
//    'transform': 'rotate(0deg)',
//    'bottom': '0px'
//  });
//  $('.centerBut').css('display', 'block');
//});

$('.Blog').click(function () {
  if ($(window).width() < 769) {
    $('.headerMobileMenu').toggleClass('active');
  }
  $('html, body').animate({
    scrollTop: $(".blog").offset().top
  }, 600);
  $('.topBut').css({
    'transform': 'rotate(0deg)',
    'top': '0px'
  });
  $('.buttomBut').css({
    'transform': 'rotate(0deg)',
    'bottom': '0px'
  });
  $('.centerBut').css('display', 'block');
});
