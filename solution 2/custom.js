$(document).ready(function() {
	$('#slider').nivoSlider( {
		effect: 'slideInRight,slideInLeft,fade',
		controlNav: false,
		animSpeed: 300,
		captionOpacity: 0.3,
		pauseTime: 8000,
	});
});3
$(document).ready(function() {
	$("#owl").owlCarousel({
	    autoPlay: 3000, //Set AutoPlay to 3 seconds
	    items : 4,
	    itemsDesktop : [1199,3],
	    itemsDesktopSmall : [979,3],
		pagination : true,
		autoPlay: false,
	});
});