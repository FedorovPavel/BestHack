function bindMenuScroll(){
	$('#href-cap').click(function(){
		scroll('#capitan');
	});
	$('#href-pasha').click(function(){
		scroll('#pasha');
	});
	$('#href-dima').click(function(){
		scroll('#dima');
	});
	$('#href-bara').click(function(){
		scroll('#barabulka');
	});

	function scroll(elem) {
		$('html, body').animate({
			scrollTop: $(elem).offset().top
		}, 1000);
	}
}

function animateSection(){
	// if 
}

function engineScrollAnimation(){
	window.onscroll = function() {
		var time_delta = (performance.now() - time);

		if(time_delta > 100) {
				// check_animation_on_screen();
				time = performance.now();
		}

		//getting direction 
		var direction = -$(window).scrollTop() + prev_scrolltop;
		prev_scrolltop = $(window).scrollTop();

		// nav_menu_visability();
		// if(!slider_ignore)
				// /check_menu_slider_position();	
	}
}

$(document).ready(function(){
	bindMenuScroll();

});