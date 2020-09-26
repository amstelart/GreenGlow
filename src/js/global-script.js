/*
 slick-animation.js
 Version: 0.3.3 Beta
 Author: Marvin Hübner
 Docs: https://github.com/marvinhuebner/slick-animation
 Repo: https://github.com/marvinhuebner/slick-animation
 */

(function ($) {
  $.fn.slickAnimation = function () {
      var currentSlickSlider = $(this);

      var slickItems = currentSlickSlider.find('.slick-list .slick-track > div');
      var firstSlickItem = currentSlickSlider.find('[data-slick-index="0"]');

      var animatedClass = 'animated';
      var visible = {opacity: '1'};
      var hidden = {opacity: '0'};

      /**
       * function for setting animationIn and animationOut class
       * @param obj
       * @param type
       * @param animationIn
       * @param animatedClass
       * @param visibility
       */

      function slickSetAnimationDefault(obj, type, animationIn, animatedClass, visibility) {
          visibility = typeof visibility !== 'undefined' ? visibility : false;

          slickRemoveAnimation(obj, 'delay');
          slickRemoveAnimation(obj, 'duration');

          if (type['opacity'] == 1) {
              obj.addClass(animationIn);
              obj.addClass(animatedClass);
          } else {
              obj.removeClass(animationIn);
              obj.removeClass(animatedClass);
          }

          if (visibility) obj.css(type);
      }

      /**
       * get timeout when delay, duration, delay and duration is set
       * @param delayIn
       * @param durationIn
       * @returns {number}
       */

      function getTimeout(delayIn, durationIn) {
          if (delayIn) {
              return delayIn * 1000 + 1000;

          } else if (durationIn) {
              return durationIn * 1000;

          } else if ((delayIn) || (durationIn)) {
              return (delayIn * 1000) + (durationIn * 1000);
          }
          return 1000;
      }

      /**
       * add css animations for delay and duration
       * @param obj
       * @param animation
       * @param value
       */
      function slickAddAnimation(obj, animation, value) {
          var delayInAttr = [
              'animation-' + animation,
              '-webkit-animation-' + animation,
              '-moz-animation-' + animation,
              '-o-animation-' + animation,
              '-ms-animation-' + animation
          ];
          var delayInAttributes = {};
          delayInAttr.forEach(function (entry) {

              delayInAttributes[entry] = value + 's';
          });
          obj.css(delayInAttributes);
      }

      /**
       * remove css animations for delay and duration
       * @param obj
       * @param animation
       */
      function slickRemoveAnimation(obj, animation) {
          var delayInAttr = [
              'animation-' + animation,
              '-webkit-animation-' + animation,
              '-moz-animation-' + animation,
              '-o-animation-' + animation,
              '-ms-animation-' + animation
          ];
          var delayInAttributes = {};
          delayInAttr.forEach(function (entry) {

              delayInAttributes[entry] = '';
          });
          obj.css(delayInAttributes);
      }

      slickItems.each(function () {
          var slickItem = $(this);

          slickItem.find('[data-animation-in]').each(function () {
              var self = $(this);

              self.css(hidden);

              var animationIn = self.attr('data-animation-in');
              var animationOut = self.attr('data-animation-out');
              var delayIn = self.attr('data-delay-in');
              var durationIn = self.attr('data-duration-in');
              var delayOut = self.attr('data-delay-out');
              var durationOut = self.attr('data-duration-out');

              if (animationOut) {
                  if (firstSlickItem.length > 0) {
                      if (slickItem.hasClass('slick-current')) {

                          slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                          if (delayIn) {
                              slickAddAnimation(self, 'delay', delayIn);
                          }
                          if (durationIn) {
                              slickAddAnimation(self, 'duration', durationIn);
                          }

                          setTimeout(function () {
                              slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
                              slickSetAnimationDefault(self, visible, animationOut, animatedClass);
                              if (delayOut) {
                                  slickAddAnimation(self, 'delay', delayOut);
                              }
                              if (durationOut) {
                                  slickAddAnimation(self, 'duration', durationOut);
                              }
                              setTimeout(function() {
                                  slickRemoveAnimation(self, 'delay');
                                  slickRemoveAnimation(self, 'duration');
                              }, getTimeout(delayOut, durationOut));

                          }, getTimeout(delayIn, durationIn));
                      }
                  }

                  currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                      if (slickItem.hasClass('slick-current')) {

                          slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                          if (delayIn) {
                              slickAddAnimation(self, 'delay', delayIn);
                          }
                          if (durationIn) {
                              slickAddAnimation(self, 'duration', durationIn);
                          }

                          setTimeout(function () {
                              slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
                              slickSetAnimationDefault(self, visible, animationOut, animatedClass);

                              if (delayOut) {
                                  slickAddAnimation(self, 'delay', delayOut);
                              }
                              if (durationOut) {
                                  slickAddAnimation(self, 'duration', durationOut);
                              }
                              setTimeout(function() {
                                  slickRemoveAnimation(self, 'delay');
                                  slickRemoveAnimation(self, 'duration');
                              }, getTimeout(delayOut, durationOut));

                          }, getTimeout(delayIn, durationIn));
                      }
                  });

                  currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                      slickSetAnimationDefault(self, hidden, animationOut, animatedClass, true);

                  });
              } else {

                  if (firstSlickItem.length > 0) {
                      if (slickItem.hasClass('slick-current')) {
                          slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                          if (delayIn) {
                              slickAddAnimation(self, 'delay', delayIn);
                          }
                          if (durationIn) {
                              slickAddAnimation(self, 'duration', durationIn);

                          }
                      }
                  }

                  currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                      if (slickItem.hasClass('slick-current')) {
                          slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                          if (delayIn) {
                              slickAddAnimation(self, 'delay', delayIn);
                          }
                          if (durationIn) {
                              slickAddAnimation(self, 'duration', durationIn);
                          }
                      }
                  });


                  currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                      slickSetAnimationDefault(self, hidden, animationIn, animatedClass, true);
                  });
              }

          });
      });
      return this;
  }
})(jQuery);


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
  $('.desktop-basket__inner').click(function(){
    $(".section-basket").addClass("opened");
  });
  $('.section-basket__close').click(function(){
    $(".section-basket").removeClass("opened");
  });

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
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
});

$('#intro-box-carousel').slick({
  autoplay: true,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
}).slickAnimation();

$(window).on('load resize', function() {
    if ($(window).width() < 768) {
      $('#team-carousel:not(.slick-initialized)').slick({
        centerMode: false,
        variableWidth: true,
        dots: false,
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
        dots: false,
        infinite: false,
        arrows: false,
        speed: 100,
        slidesToShow: 1
      });
    } else {
      $("#caption-carousel.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 991) {
      $('#post-carousel:not(.slick-initialized)').slick({
        centerMode: false,
        variableWidth: true,
        dots: false,
        infinite: true,
        arrows: false,
        speed: 100,
        slidesToShow: 1
      });
    } else {
      $("#post-carousel.slick-initialized").slick("unslick");
    }
  });

// На проекте нет jQuery, но хочется $( document ).ready...
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// zeynepjs initialization for demo
$(function() {
  // loop all zeynepjs menus for initialization
  $('.zeynep').each(function () {
    // init zeynepjs side menu
    $(this).zeynep({
      opened: function (el) {
        // log
        console.log(el.attr('data-menu-name') + ' side menu opened')
      },
      closed: function (el) {
        // log
        console.log(el.attr('data-menu-name') + ' side menu closed')
      }
    })
  })

  // handle zeynepjs overlay click
  $('.zeynep-overlay').on('click', function () {
    // close all zeynepjs menus
    $('.zeynep.opened').each(function () {
      $(this).data('zeynep').close()
    })
  });
  $('.zeynep__close').on('click', function () {
    // close all zeynepjs menus
    $('.zeynep.opened').each(function () {
      $(this).data('zeynep').close()
    })
  });

  // open left zeynepjs side menu
  $('#main-nav-toggler').on('click', function () {
    $('.zeynep.left').data('zeynep').open();
  });
  
  // open right zeynepjs side menu
  $('#basket-toggler').on('click', function () {
    $('.zeynep.right').data('zeynep').open();
  });

  $('.order-basket-toggler').on('click', function () {
    $(this).toggleClass('active');
    $('.zeynep').each(function () {
      const $zeynep = $(this);
      if ($zeynep.hasClass('opened')) {
      $zeynep.data('zeynep').close()
      } else {
        $zeynep.data('zeynep').open();
      }
    });
  });

});

/**
 * =================================================================================
 *
 * PLON Component : ScrollParallax
 *
 * @author			Bartosz Perończyk (peronczyk.com)
 * @modified		2017-09-15
 * @repository		https://github.com/peronczyk/plon
 *
 * =================================================================================
 */


(function($) {

	'use strict';

	/** ----------------------------------------------------------------------------
	 * PLUGIN DEFAULT CONFIGURATION
	 */

	var defaults = {
			debug: 0,
			dataSelector: 'data-parallax',
			defaultSpeed: 0.7,
			eventsNamespace: '.plon.scrollparallax',
		},
		$document 		= $(document),
		frameRequested	= false,
		offset, speed;


	/** ----------------------------------------------------------------------------
	 * ADJUST PARALLAX LAYERS
	 */

	function paralaxAdjust(config, layers) {
		for (var n = 0 ; n < layers.length ; n++) {
			offset = $document.scrollTop() * layers[n].speed;
			layers[n].obj.css({transform: 'translate3d(0,' + offset + 'px,0)'});
		}
	}


	/** ----------------------------------------------------------------------------
	 * SET UP JQUERY PLUGIN
	 */

	$.scrollParallax = function(options) {

		// Setup configuration
		var config = $.extend({}, defaults, options);

		// Definitions
		var layers = [],
			_self = $('[' + config.dataSelector + ']'),
			elem,
			layersCount = 0;

		if (config.debug) console.info('Plugin loaded: scrollParallax');

		// Create array of layers
		_self.each(function(index) {
			elem = $(this);
			speed = elem.attr(config.dataSelector);

			layers[index] = {
				'obj'	: elem,
				'speed'	: (speed) ? parseFloat(speed) : config.defaultSpeed,
			}
			layersCount++;
		});

		if (console.debug) console.info('scrollParallax: layers found - ' + layersCount);

		paralaxAdjust(config, layers);

		// Monitor document scrolling
		$(window).on('scroll' + config.eventsNamespace, function() {
			if (frameRequested) return;
			frameRequested = true;
			requestAnimationFrame(function() {
				paralaxAdjust(config, layers);
				frameRequested = false;
			});
		});
	}

})(jQuery);

var debug = 1; // Debug mode

$(function() {

	'use strict';

	$.scrollParallax({
		debug: debug,
	});

});
