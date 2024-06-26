/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

$(document).ready(function () {
	'use strict';

	// navbarDropdown
	if ($(window).width() < 992) {
		$('.navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}

	$(window).on('scroll', function () {
		//.Scroll to top show/hide
		if ($('#scroll-to-top').length) {
			var scrollToTop = $('#scroll-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 200) {
				scrollToTop.fadeIn(200);
			} else {
				scrollToTop.fadeOut(100);
			}
		}
	});
	// scroll-to-top
	if ($('#scroll-to-top').length) {
		$('#scroll-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	}

	// Shuffle js filter and masonry
	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.testimonial-slider').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});


	// CountDown JS
	var countDownEl = $('.count-down');
	if (countDownEl) {
		$('.count-down').syotimer({
			year: 2021,
			month: 5,
			day: 9,
			hour: 20,
			minute: 30
		});
	}

	// Magnific Popup Image
	$('.portfolio-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: true,
		fixedBgPos: true
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

});
	(function ($) {
		$(function () {
	
	
		$(window).on('scroll', function () {
			fnOnScroll();
		});
	
		$(window).on('resize', function () {
			fnOnResize();
		});
	
	
		var agTimeline = $('.js-timeline'),
			agTimelineLine = $('.js-timeline_line'),
			agTimelineLineProgress = $('.js-timeline_line-progress'),
			agTimelinePoint = $('.js-timeline-card_point-box'),
			agTimelineItem = $('.js-timeline_item'),
			agOuterHeight = $(window).outerHeight(),
			agHeight = $(window).height(),
			f = -1,
			agFlag = false;
	
		function fnOnScroll() {
			agPosY = $(window).scrollTop();
	
			fnUpdateFrame();
		}
	
		function fnOnResize() {
			agPosY = $(window).scrollTop();
			agHeight = $(window).height();
	
			fnUpdateFrame();
		}
	
		function fnUpdateWindow() {
			agFlag = false;
	
			agTimelineLine.css({
			top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
			bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
			});
	
			f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
		}
	
		function fnUpdateProgress() {
			var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
	
			i = agTop + agPosY - $(window).scrollTop();
			a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
			n = agPosY - a + agOuterHeight / 2;
			i <= agPosY + agOuterHeight / 2 && (n = i - a);
			agTimelineLineProgress.css({height: n + "px"});
	
			agTimelineItem.each(function () {
			var agTop = $(this).find(agTimelinePoint).offset().top;
	
			(agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
			})
		}
	
		function fnUpdateFrame() {
			agFlag || requestAnimationFrame(fnUpdateWindow);
			agFlag = true;
		}
	
	
		});
	})(jQuery);
	
	var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 10,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5,
  });
