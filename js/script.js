var navElem = document.querySelector(".nav");
var mobileElem = document.querySelector(".mobile-menu");

var $header = $(".nav");
var $loading = $(".loading");
var $loadbar = $(".loading hr");
var $navOption = $(".nav ul li a");
var $button = $(".button");
var $mobileItem = $(".mobile-menu ul li a");
var $mobileMenu = $(".mobile-menu ul");
var $mobileIcon = $(".mobile-menu .mobile-icon");
var $logo = $(".loading .logo img");
var $navLogo = $(".container .nav h1 span");
// Cache exisiting pages
(function ($) {
    'use strict';
    var $body    = $('html'),
        content  = $('#main').smoothState({
            prefetch: true,
            pageCacheSize: 4,
            onStart: {
                duration: 250,
                render: function (url, $container) {
                    content.toggleAnimationClass('is-exiting');
                    $body.animate({
                        scrollTop: 0
                    });
                }
            }
        }).data('smoothState');
})(jQuery);

var headroom = new Headroom(navElem, {
  "offset": 200,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "slideInDown",
    "unpinned": "slideOutUp"
  }
});
headroom.init();

var headroomMobile = new Headroom(mobileElem, {
  "offset": 200,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "slideInDown",
    "unpinned": "slideOutUp"
  }
});
headroomMobile.init();





$(document).scroll(function() {
	if ($(this).scrollTop() > 0) {
		$header.addClass("activeScroll");


	} else {
		$header.removeClass("activeScroll");
	}
});




$(document).ready(function() {
	loadGrow();
	window.setTimeout(load, 3000);
	animateDiv($logo);
});

function load() {
	$loading.fadeOut(500);

}


function loadGrow() {
	$loadbar.velocity({
		width: "100%"
	}, 2750);

}

function animateDiv(obj) {
	obj.addClass("spin");
}






$mobileIcon.on("click", function() {
	if ($mobileMenu.hasClass("active")) {
		$mobileMenu.removeClass("active");
		$(this).removeClass("active");
	} else {
		$mobileMenu.addClass("active");
		$(this).addClass("active");
	}
});




$button.on("click", function() {
	var $sect = $("#" + $(this).data("nav"));

	if ($sect) {
		$sect.velocity("scroll", {duration: 750, offset: -70});
	}
});

$navOption.on("click", function(e) {
	var $sect = $("#" + $(this).data("nav"));

	if ($sect) {
		$sect.velocity("scroll", {duration: 750, offset: -70});
	}
})

$mobileItem.on("click", function(e) {
	var $sect = $("#" + $(this).data("nav"));

	if ($sect) {
		$sect.velocity("scroll", {duration: 750, offset: -70});
	}
})







