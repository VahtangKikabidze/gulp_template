jQuery(document).ready(function($) {

	$('.carousel-inner').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false
	});


	$('.main_text_slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false

	});

	$('.bg_parallax').parally();

	$('.bg_parallax2').parally();

	$('.bg_parallax3').parally({
		xpos: '0%'
	});

	$('.bg_parallax4').parally({
		xpos: '100%'
	});



	$('.bg_parallax5').parally({
		offset: 50
	});



	$('.hamburger').click(function(event) {
		$('.hamburger').toggleClass('is-active');
		$('header .nav').toggleClass('is-active');
	});





});