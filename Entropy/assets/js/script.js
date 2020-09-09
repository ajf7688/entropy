(function ($) {
	
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
	
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});

	$('.navbar-collapse ul li a').click(function(){ 
		$('.navbar-toggle:visible').click();
	});

}(jQuery));