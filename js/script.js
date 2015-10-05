

var $service = $(".services li");
var $header = $("header");
var $pworks = $("#coming-soon li");
var $loading = $(".loading");
var $loadbar = $(".loading hr");
var $logo = $(".loading .logo");
var $hamburger = $(".hamburger");
var $navOption = $("header ul li a");
var $button = $(".button");

$service.on("mouseover", function() {

	var $graphic =  $(this).find(".graphic");

	$graphic.velocity("stop");
	$graphic.velocity({
		top: -150,
		left: 0
	}, 300);
});


$service.on("mouseleave", function() {
	var $graphic =  $(this).find(".graphic");

	$graphic.velocity("stop");

	$graphic.velocity({
		top: 0,
		left: 0
	}, 300);
});


$pworks.on("mouseover", function() {
	var $content =  $(this).find(".overlay .content");

	$content.velocity("stop");
	$content.velocity({
		top: -350,
		left: 0
	}, 300);
});

$pworks.on("mouseleave", function() {
	var $content = $(this).find(".overlay .content");

	$content.velocity("stop");

	$content.velocity({
		top: 0,
		left: 0
	}, 300);

})

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
});

function load() {
	$loading.fadeOut(500);

}


function loadGrow() {
	$loadbar.velocity({
		width: "100%"
	}, 2750);

	$logo.velocity({
		left: "100%"
	}, 2750);
}

$hamburger.on('click', function() {
	$hamburger.toggleClass("active");
});


$button.on("click", function(e) {
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





