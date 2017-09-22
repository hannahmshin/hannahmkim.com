$(document).ready(function() {

	// Hamburger menu interaction/animation
	var menuIsOpen = false
  	$('.menu-button').on('click', function() {
		$('.menu-icon').toggleClass('animate');

		if (menuIsOpen) {
			$('.menu').removeClass('menu-open');
		} else {
			$('.menu').addClass('menu-open');
		}

		menuIsOpen = !menuIsOpen;
	})

  	// Switching profile sections
	$('.js-about-button').on('click', function() {
		$('.js-about-button').toggleClass('about-button-selected');
		$('.js-about-content').toggleClass('hidden')
	})

});