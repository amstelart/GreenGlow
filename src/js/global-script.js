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

    if ($(window).width() < 768) {
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

  // open first zeynepjs side menu
  $('#main-nav-toggler').on('click', function () {
    $('.zeynep.left').data('zeynep').open();
  });
  
  // open second zeynepjs side menu
  $('#basket-toggler').on('click', function () {
    $('.zeynep.right').data('zeynep').open();
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