// Если на проекте jQuery
$( document ).ready(function() {

  $('select').niceSelect();
  // dropdown
  $('.js-drop-toggle').click(function(){
    var parent = $(this).closest(".js-drop-wrap");
    var current = parent.find(".js-drop-cont");
    current.slideToggle();
    parent.toggleClass("active")
  });
  // dropdown === end
  // code
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset:       200,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
  // code
  // code
  // code
  // code
  // code
});

$(window).on('load resize', function() {
    if ($(window).width() < 768) {
      $('#team-carousel:not(.slick-initialized)').slick({
        centerMode: false,
        variableWidth: true,
        dots: true,
        infinite: false,
        arrows: false,
        speed: 100,
        slidesToShow: 2
      });
    } else {
      $("#team-carousel.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 768) {
      $('#caption-carousel:not(.slick-initialized)').slick({
        centerMode: false,
        variableWidth: true,
        dots: true,
        infinite: false,
        arrows: false,
        speed: 100,
        slidesToShow: 1
      });
    } else {
      $("#caption-carousel.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 768) {
      $('#post-carousel:not(.slick-initialized)').slick({
        centerMode: false,
        variableWidth: true,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 100,
        slidesToShow: 1
      });
    } else {
      $("#post-carousel.slick-initialized").slick("unslick");
    }
  });

  // var image = document.getElementsByClassName('parallax');
  // new simpleParallax(image, {
  //   delay: .6,
  //   transition: 'cubic-bezier(0,0,0,1)'
  // });

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
//
// ready(function(){
//   // code
// });
