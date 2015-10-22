

var $header = $("header");
var $loading = $(".loading");
var $loadbar = $(".loading hr");
var $navOption = $("header ul li a");
var $button = $(".button");
var $exitButton = $(".exit");
var $aboutButton = $(".about-button");
var $about = $(".about");


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

}






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


var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

$exitButton.on("click", function() {
	$about.fadeOut(500);

});

$aboutButton.on("click", function() {
	$about.fadeIn(500);

})






