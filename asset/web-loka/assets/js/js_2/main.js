( function( $ ) {
	"use strict";

	function miiMenu() {
		function handleMenuL1() {
			var currentA = $( this ),
				menu = currentA.children('.menu, .sub-menu');

			if ( currentA.hasClass( 'menu-item-has-children' ) ) {
				menu.toggleClass('open');
			}
		}

		function handleMenuL2In() {
			var currentA = $( this ),
				parentMenu = currentA.parent(),
				parentMenuHeight = parentMenu.height(),
				menuSub = currentA.children('.menu-sub'),
				menuSubHeight = menuSub.height();

			if ( currentA.hasClass( 'menu-item-has-children' ) && parentMenuHeight < menuSubHeight ) {
				parentMenu.css( 'height', menuSubHeight );
			}
		}

		function handleMenuL2Out() {
			var currentA = $( this ),
				parentMenu = currentA.parent();
				
			parentMenu.css( 'height', 'auto' );

		}
		
		// Level 1
		$( '.menu-primary li' ).hover( handleMenuL1, handleMenuL1 );
		$( '.menu-top li' ).hover( handleMenuL1, handleMenuL1 );

		// Level 2
		$( '.menu-primary .menu-list li' ).hover( handleMenuL2In, handleMenuL2Out );

		/*Menu mobile*/
		$( '.toggle-mobile-menu' ).on('click', function() {
			$(this).toggleClass('open');
			$('.hm-menu-wrapper').toggleClass('open');
		});

		$('.hm-menu-wrapper .has-child .subnav').on('click', function() {
			$(this).toggleClass('open');
			$(this).next('.sub-menu').toggleClass('open');
		});

		$('.hm-menu-wrapper a').click(function() {
			$('.hm-menu-wrapper').removeClass('open');
			$( '.toggle-mobile-menu' ).removeClass('open');
		});

		/*Open search*/
		$( '.search-toggle' ).on( 'click', function() {
			$('.search-popup').toggleClass('open');
		} );
		$( '.search-popup-close' ).on( 'click', function() {
			$('.search-popup').removeClass('open');
		} );
	}

	function miiHelpForm() {
		if ( $( '.hero-help' ).length ) {
			var topHero = $( '.hero-help' ).offset().top;
			$( 'body' ).on( 'click', '.help-toggle', function() {
				$( this ).toggleClass( 'up' );
				var $this = $( this ),
					childI = $( this ).children('i');

				if ( $this.hasClass( 'up' ) ) {
					childI.removeClass( 'ion-chevron-down' ).addClass( 'ion-chevron-up' );

					// Scroll top
					$("html, body").animate({
						scrollTop: topHero
					}, 600);
				} else {
					childI.removeClass( 'ion-chevron-up' ).addClass( 'ion-chevron-down' );
				}

				$( '.help-content' ).slideToggle( 'fast' );
			} );

			$( 'body' ).on( 'click', '.help-tab a', function(e) {
				e.preventDefault();
				var $this = $( this ),
					thisTarget = $this.attr('href'),
					parentLi = $this.parent();
				
				// tab list
				$( '.help-tab li' ).removeClass( 'active' );
				parentLi.addClass( 'active' );

				// tab content
				$( '.help-tab-content .help-tab-content-item' ).removeClass('active');
				$( '.help-tab-content ' + thisTarget ).addClass( 'active' );
			} );
		}
	}

	function tabList() {
		$( 'body' ).on( 'click', '.tab-list a', function(e) {
			e.preventDefault();
			var $this = $( this ),
				thisTarget = $this.attr('href'),
				parentLi = $this.parent();
			
			// tab list
			$( '.tab-list li' ).removeClass( 'active' );
			parentLi.addClass( 'active' );

			// tab content
			$( '.tab-list-content .tab-list-content-item' ).removeClass('active');
			$( '.tab-list-content ' + thisTarget ).addClass( 'active' );
		} );

		$( 'body' ).on( 'click', '.event-schedule-tab a', function(e) {
			e.preventDefault();
			var $this = $( this ),
				thisTarget = $this.attr('href'),
				parentLi = $this.parent();

				console.log('asas');
			
			// tab list
			$( '.event-schedule-tab li' ).removeClass( 'active' );
			parentLi.addClass( 'active' );

			// tab content
			$( '.event-tab-content-wrapper .event-tab-content' ).removeClass('active');
			$( '.event-tab-content-wrapper ' + thisTarget ).addClass( 'active' );
		} );
	}

	function miiSlider() {
		if ( $.fn.slick ) {
			// Sub cats slider
			$('.sub-cats-slider').slick({
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 4,
				prevArrow: "<span class='arrow-left'><i class='ion-ios-arrow-thin-left'></i> Prev</span>",
				nextArrow: "<span class='arrow-right'>Next <i class='ion-ios-arrow-thin-right'></i></span>",
				responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
			});

			// CS Slider
			$('.cs-slider').slick({
				infinite: false,
				speed: 300,
				arrows: false,
				dots: true,
				customPaging : function(slider, i) {
					return '';
				},
			});

			// CS item slider
			$('.cs-item-slider').slick({
				infinite: false,
				speed: 300,
				prevArrow: "<span class='arrow-left ion-ios-arrow-left'></span>",
				nextArrow: "<span class='arrow-right ion-ios-arrow-right'></span>",
			});

			// Career slider
			$('.career-slider').slick({
				infinite: false,
				speed: 300,
				prevArrow: "<span class='arrow-left'><i class='ion-android-arrow-dropleft'></i></span>",
				nextArrow: "<span class='arrow-right'><i class='ion-android-arrow-dropright'></i></span>",
			});

			// Company history slider
			$('.company-history-slider').slick({
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 4,
				prevArrow: "<span class='arrow-left'><i class='ion-ios-arrow-left'></i></span>",
				nextArrow: "<span class='arrow-right'><i class='ion-ios-arrow-right'></i></span>",
				responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
			});

			// HS Solution slider
			$('.hs-solution-slider').slick({
				infinite: false,
				speed: 300,
				arrows: false,
				dots: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				responsive: [
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				],
				customPaging : function(slider, i) {
					return '';
				},
			});
		}
	}

	function miiPopUp() {
		// Magnific popup
		if ( $.fn.magnificPopup ) {
			$('.popup-yt-toggle').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});	
		}
	}

	function formHelper() {
		$('.contact-form .form-control').focus(function() {
			var parentControl = $(this).parent();
			parentControl.addClass('focus');
		});
		$('.contact-form .form-control').blur(function() {
			var parentControl = $(this).parent();
			parentControl.removeClass('focus');
		});
	}

	function scrollBarHelper() {
		$('#tab-content-scroll').perfectScrollbar();
	}

	// Match height
	function themeMatchHeight() {
		if ( $.fn.matchHeight ) {

			/*List entry*/
			var $list_entry = $( '.search-result-content, .insight-result-content' );
			$list_entry.imagesLoaded( function() {
				$list_entry.find( '.list-entry-item .list-entry-item__inner' ).matchHeight();
			} );

			/*List Magazine*/
			var $list_magazine = $( '.list-magazine' );
			$list_magazine.imagesLoaded( function() {
				$list_magazine.find( '.list-magazine-item a' ).matchHeight();
			} );
		}
	}

	$( document ).ready( function() {
		miiMenu();
		miiHelpForm();
		tabList();
		miiSlider();
		miiPopUp();
		formHelper();
		scrollBarHelper();
		themeMatchHeight();
	} );

	$( window ).scroll( function( e ) {
		
	} );
	
} )( jQuery );