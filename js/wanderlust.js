var caseElem = document.querySelector("header.nav-bar nav");
var mobileElem = document.querySelector(".mobile-menu");

var headroomCase = new Headroom(caseElem, {
  "offset": 200,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "slideInDown",
    "unpinned": "slideOutUp"
  }
});
headroomCase.init();


var $mobileItem = $(".mobile-menu ul li a");
var $mobileMenu = $(".mobile-menu ul");
var $mobileIcon = $(".mobile-menu .mobile-icon");

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


$mobileIcon.on("click", function() {
	if ($mobileMenu.hasClass("active")) {
		$mobileMenu.removeClass("active");
		$(this).removeClass("active");
	} else {
		$mobileMenu.addClass("active");
		$(this).addClass("active");
	}
});


$mobileItem.on("click", function(e) {
	var $sect = $("#" + $(this).data("nav"));

	if ($sect) {
		$sect.velocity("scroll", {duration: 750, offset: -70});
	}
})
