jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("body").addClass("header-fixed");
    } else {
      $("body").removeClass("header-fixed");
    }
  });

  $(".down-arrow").click(function (e) {
    e.stopPropagation();
    const parentLi = $(this).closest("li");

    if (parentLi.hasClass("active")) {
      parentLi.removeClass("active");
    } else {
      $(".navbar-menu li").removeClass("active");
      parentLi.addClass("active");
    }
  });

  $(".mobile-toggle").click(function () {
    $("body").toggleClass("mobile-open");
  });

  $(".nav-links").click(function () {
    $("body").removeClass("mobile-open");
  });


  $('.myslider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  $('.serviceslider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});
