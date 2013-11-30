$(document).ready( function(){
	$('.carousel').carousel({
 		interval: 99999,
	});

	$(".dropdown-toggle").click(function() {
		$(".dropdown-menu").slideDown();
		$(".arrow").show(100);
	});
	$(document).click(function(){
		$(".arrow:visible").hide(100);
		$(".dropdown-menu:visible").slideUp();
	});

/*	$('.dropdown-menu').mouseleave(function(){
 		$(this).slideUp();
 		$(".dropdown").removeClass('open');
	});*/

/*	$('.dropdown').hover(
		function(){
			$(this).addClass('open');
			$('.dropdown-menu').slideDown('fast');
		},
		function(){
		}
	);*/
		/*$('.dropdown-menu').hover(
		function(){
		},
		function(){
			$(this).slideUp();
			$('.dropdown').removeClass('open');
			$('#drop').removeClass('.dropdown-toggle');
			$('#drop').addClass('.dropdown-toggle');
					});*/

		$(".glyphicon-search").toggle(
			function() {
				$("#sear").removeClass("search");
				$(".input-group").show();
			},
			function() {
				$(".input-group").hide();
				$("#sear").addClass("search");
			}
		);
/*		$(".border").hover(
			function() {
				$(this).addClass("activeb");
				$(this).slideDown();
			}
			);*/
/*		$('.glyphicon-search').click(function() {
			$(".input-group").removeClass('showsearch');
			$('.input-group').slideUp();
		});*/
})