import '../node_modules/slick-carousel/slick/slick';


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

//- при загрузке сайта вешаем на меню класс актив и меняем вид кнопки "меню"
$(document).ready(function () {


  $('.buttonMenu').click(function (event) {
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
    }
  })
});


//-- при клике на .индивидуалс скролл на выбранный элемент
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


//-- при клике на .компаниес скролл на выбранный элемент
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


//-- при клике на .зестудио скролл на выбранный элемент
$('.TheStudio').click(function () {
  if ($(window).width() < 769) {
    $('.headerMobileMenu').toggleClass('active');
  }
  $('html, body').animate({
    scrollTop: $(".txt1Bottom").offset().top
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


//-- при клике на .ебоутюз скролл на выбранный элемент
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


//-- при клике на .блог скролл на выбранный элемент
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
