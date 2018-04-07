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
	$('#whyWe').click(function () {
		scroll('#capitan');
	});

	function scroll(elem) {
		$('html, body').animate({
			scrollTop: $(elem).offset().top
		}, 1000);
	}
}

function animateSection(id) {
	const section = $(id);
	if (!$(section).isOnScreen(0.3, 0.3))
		return;

	if ($(section).attr('animate') == 'true')
		return;

	$(section).attr('animate', 'true');

	animatePhoto();
	animateInitial();
	animateContainer();
	animateKnowledges();
	return;

	function animateInitial() {
		$(section).find('.section__content_info_card_initial-div').removeClass('hidden');
		return;
	}

	function animateContainer() {
		let elems = $(section).find('.field');
		elems.sort((a, b) => {
			if (Number($(a).attr('num')) > Number($(b).attr('num')))
				return 1;
			return -1;
		});
		for (let I = 0; I < elems.length; I++) {
			$(elems[I]).css('transition-delay', ((I + 1) * 200)+'ms');
		}

		$(elems).removeClass('hidden').removeClass('rhidden');
		return;
	}

	function animateKnowledges() {
		let knowledges = $(section).find(".knowledges_container__knowledge-div");
		knowledges.sort((a, b) => {
			if (Number($(a).attr('num')) > Number($(b).attr('num')))
				return 1;
			return -1;
		});
		for (let I = 0; I < knowledges.length; I++) {
			$(knowledges[I]).css('transition-delay', ((I + 1) * 200)+'ms');
		}
		$(knowledges).removeClass('hidden');
	}

	function animatePhoto() {
		$(section).find('img.photo-img').removeClass('hidden');
		return;
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
	animateFooter();
	return;
}

function animateFooter(){
	const section = $('#members-container');
	if (!$(section).isOnScreen(0.2, 0.2))
		return;
	
	animateMember();
	function animateMember() {
		let members = $(section).find(".member");
		members.sort((a, b) => {
			if (Number($(a).attr('num')) > Number($(b).attr('num')))
				return 1;
			return -1;
		});
		for (let I = 0; I < members.length; I++) {
			$(members[I]).css('transition-delay', ((I + 1) * 200)+'ms');
		}
		$(members).removeClass('hidden');
	}
}

$(document).ready(function () {
	bindMenuScroll();
	checkAnimationOnScreen();
	engineScrollAnimation();

});