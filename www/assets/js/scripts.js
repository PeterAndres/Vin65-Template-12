var v65 = {
	global : {
		init : function(){
			v65.global.addToCartListener();
			v65.global.continueShopping();
			v65.global.navHover();
			v65.global.responsiveCleanUp();
		},
		addToCartListener : function(){
			$("[v65js=addToCart]").on("submit",function(){
				v65.cookies.createCookie("continueShoppingURL", window.location.href);
			});
		},
		backToTop : function(){
			$('.backToTop').click(function(){
		    $("html, body").animate({ scrollTop: 0 }, 600);
		    return false;
		   });
		},
		continueShopping : function(){
			$(".v65-cartCheckOutButtons a.linkAltBtn, #v65-checkCartSummaryMoreOptions a:contains('Continue shopping')").attr("href", v65.cookies.readCookie("continueShoppingURL"));
		},
		mobileMenu : function(){
			$('#responsive-menu-button').sidr({
				name: 'sidr-main',
				source: 'nav'
			});
		},
		navHover : function(){
			$("nav ul li ul li a").hover(function(){
				$(this).parent().parent().parent().children("a").toggleClass("hover");
			});
		},
		equalize5Up : function(){
			$(".v65-product5Up").equalize(10);
		},
		responsiveCleanUp: function(){
			var submenuItems = $('.subMenu ul li').length;
			if( submenuItems < 1) {
				$('.footerMenuLink').remove();
			}

			$(window).scroll(function() {
				var browserSize = $(window).width();

				if($(document).scrollTop() > 150 && browserSize < 580) {
					$('.backtotop').css('display','block');
					$('.v65-productAddToCart-drilldown').addClass('v65-productAddToCart-drilldownActivate');
				} else {
					$('.backtotop').css('display','none');
					$('.v65-productAddToCart-drilldown').removeClass('v65-productAddToCart-drilldownActivate');
				}
			});

			$('.backtotop a').click(function() {
				$("html, body").animate({ scrollTop: 0 }, 400);
				return false;
			});
		}
	},

	cookies : {
		createCookie : function(name,value,days) {
			var expires = "";

			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			}

			document.cookie = name+"="+value+expires+"; path=/";
		},
		readCookie : function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},
		eraseCookie : function(name) {
			createCookie(name,"",-1);
		}
	},
	home : {
		init : function(){
			v65.home.initHomepageGallery();
			v65.home.eventsContainer();
		},
		initHomepageGallery : function(){
			if($("#slider").length){
				$("#slider").v65PhotoGallery({
					galleryHeight : null,
					galleryWidth : null,
					galleryId : "351b0bd3-aa39-e170-9a5c-26c4ec775340"
				});
			}
		},
		eventsContainer : function(){
			if($(".eventsHome").length && !$(".Event").length){
				$(".eventsHome").remove();
			}
		}
	},

	page : {
		initPhotoGallery : function(){
			if($("#pagePhotoGallery").length){
				$("#pagePhotoGallery").v65PhotoGallery({
					galleryHeight : null, // This value is translated to 420px and will change the photogallery height
					galleryWidth : null // This value is translated to 630px and will change the photogallery width
						/*
						Uncomment the code below if you want to change how the photo gallery is displayed.

						galleryHeight : 420, // This value is translated to 420px and will change the photogallery height
						galleryWidth : 630, // This value is translated to 630px and will change the photogallery width
						pauseTime : 5000, // Adjust how long the image is displayed for. Value is in milliseconds
						animSpeed : 1000, // Adjust the transition speed between images. Value is in milliseconds
						controlNav : false, // hide the 1,2,3 navigation
						directionNav : false // hide the arrow navigation
					*/
				});
			}
		}
	}
};

//Photogallery Plugin and Equalize Plugin
;
(function($, undefined) {
	$.fn.v65PhotoGallery = function(options){
		var defaults = {
			galleryId : $("#pagePhotoGallery").attr("v65jsphotogalleryid"),
			galleryHeight : null,
			galleryWidth : null,
			timestamp : "&timestamp="+ new Date().getTime()
		},
		gallery = $(this),
		settings = $.extend(defaults, options);
		gallery.html("").css({
			"height":settings.galleryHeight,
			"width":settings.galleryWidth,
			"overflow":"hidden"
		});
		$.ajax({
	    		type: "GET",
			url: "/index.cfm?method=pages.showPhotoGalleryXML&photogalleryid="+settings.galleryId+defaults.timestamp,
			dataType: "xml",
			success: function(xml) {
				var slides = "";
				$(xml).find('img').each(function() {
					var location = '/assets/images/photogallery/images/large/',
						photo = $(this).attr('src'),
						caption = $(this).attr('caption'),
						title = $(this).attr('title'),
						url = $(this).attr('link');
						if (url === undefined) {
						var	image = '<img alt="'+title+'" src="'+location+photo+'" title="'+caption+'"/>';
						} else{
						var	image = '<a href="'+url+'"><img alt="'+title+'" src="'+location+photo+'" title="'+caption+'"/></a>';
						}
						slides += image;
				});
				gallery.append(slides);
			},
			complete: function(){
	   			gallery.slick({
						arrows: settings.arrows, //Show the arrow navigation
						autoplay: settings.autoplay, //Does the carousel autoplay or not
						autoplaySpeed: settings.autoplaySpeed, // Adjust the transition speed between images. Value is in milliseconds
						centerMode: settings.centerMode, //Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
            centerPadding: settings.centerPadding, //Side padding when in center mode (px or %)
						dots: settings.dots, //Show the dot navigation for each image
						fade: settings.fade, //Add a fade effect between image transitions
            slidesToShow: settings.slidesToShow, //How may slides to show at once
						slidesToScroll: settings.slidesToScroll //How many slides to scroll at once
				});
				$('#pagePhotoGallery .slick-slide img').each(function(){ 
					if ($(this).attr('title')){
						var slideCaption = $(this).attr('title');
						$(this).parent('div').addClass('has-caption').append('<div class="slidecaption">' + slideCaption + '</div>');
					}
				});
	   		}
	   	});
	};
    $.fn.equalize = function(length) {
        for (var i = 0; i < this.length; i += length) {
            var elems = this.slice(i, i + length),
                equalizeArray = [];
            for (j = 0; j < length; j++) {
                equalizeArray.push(elems.eq(j).height());
            }
            var height = Math.max.apply(Math, equalizeArray);
            elems.css('min-height', height);
        }
        return this;
    };
})(jQuery);
v65.home.init();
v65.global.init();
v65.page.initPhotoGallery();

$(window).load(function () {
  v65.global.mobileMenu();
  v65.global.backToTop();
  var browserSize = $(window).width();

  if (browserSize > 579) {
	v65.global.equalize5Up();
  }

});
