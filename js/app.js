
// var $select = $("<select></select>");
// $("#menu").append($select);

var $navbar_header = $('<div class="navbar-header"></div>');

var $button = $("<button></button>");
var $span = $('<span class="icon-bar"></span>');

for (var i = 0; i < 3; i++) {
  $button.append($span.clone());
}

$button.addClass('navbar-toggle');

$navbar_header.append($button);

$("#menu .container").prepend($navbar_header);
// var $mobile_menu = $("<ul></ul>");

// $('.nav li a').each(function(){
// 	$anchor = $(this);
// 	var $mobile_li_item = $("<li></li>");
// 	$mobile_li_item.val($anchor.val());
// 	$mobile_li_item.text($anchor.text());

// 	$mobile_menu.append($mobile_li_item);

// });
$(function(){
	$('.navbar-toggle').on('click', function(){
		$('#navbar').toggle();
	});
});


// $navbar_header.append($mobile_menu);

