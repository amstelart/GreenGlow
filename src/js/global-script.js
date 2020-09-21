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
  });

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
