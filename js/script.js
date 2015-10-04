

var $service = $(".services li");
var $header = $("header");
var $pworks = $("#coming-soon li");

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
		$header.css("background-color", "#fafafa");

	} else {
		$header.css("background-color", "transparent");
	}
});



