$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;


  // $(".fullscreen").css("height", window_height)
  // $(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({
    topSpacing: 0
  });


  if (document.getElementById("default-select")) {
    $('select').niceSelect();
  };




  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });
  $('.active-testimonial').owlCarousel({
    items: 3,
    margin: 30,
    // autoplay: true,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      991: {
        items: 2,
      },
      1200: {
        items: 3,
      }

    }
  });

  $('.active-brand-carusel').owlCarousel({
    items: 5,
    loop: true,
    margin: 30,
    autoplayHoverPause: true,
    smartSpeed:650,         
    autoplay:true, 
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2,
        },
        768: {
            items: 4,
        },
        768: {
            items: 5,
        }
    }
});
