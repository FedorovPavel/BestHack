//time value for calculation delta in scroll event
var time = performance.now();
//values to detec direction of scrolling
var prevScrolltop;

function bindMenuScroll() {
	$('#href-cap').click(function () {
		scroll('#capitan');
	});
	$('#href-pasha').click(function () {
		scroll('#pasha');
	});
	$('#href-dima').click(function () {
		scroll('#dima');
	});
	$('#href-bara').click(function () {
		scroll('#barabulka');
	});

	function scroll(elem) {
		$('html, body').animate({
			scrollTop: $(elem).offset().top
		}, 1000);
	}
}

function animateSection(id) {
	const section = $(id);
	if (!$(section).isOnScreen(0.2, 0.2))
		return;

	if ($(section).attr('animate') == 'true')
		return;

	$(section).attr('animate','true');

	animatePhoto();
	animateContainer();
	animateKnowledges();
	return;

	function animateContainer() {
		
	}

	function animateKnowledges() {
		
	}

	function animatePhoto() {
		
	}
}

function engineScrollAnimation() {
	window.onscroll = function () {
		var time_delta = (performance.now() - time);

		if (time_delta > 100) {
			checkAnimationOnScreen();
			time = performance.now();
		}

		//getting direction 
		var direction = -$(window).scrollTop() + prevScrolltop;
		prevScrolltop = $(window).scrollTop();
	}
}

function checkAnimationOnScreen() {
	animateSection('#capitan');
	animateSection('#pasha');
	animateSection('#dima');
	animateSection('#barabulka');
	return;
}

$(document).ready(function () {
	bindMenuScroll();
	engineScrollAnimation();
});