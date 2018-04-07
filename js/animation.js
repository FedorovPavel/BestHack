//time value for calculation delta in scroll event
var time = performance.now();
//values to detec direction of scrolling
var prevScrolltop;

//  Установка связей для плавной анимации переходов
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
	$('#href-total').click(function() {
		scroll('#footer');
	})

	//  Переход к объекту на странице
	function scroll(elem) {
		$('html, body').animate({
			scrollTop: $(elem).offset().top
		}, 1000);
	}
}


//  Анимация сектора
function animateSection(id) {
	const section = $(id);
	//  Проверка на видимость сектора
	if (!$(section).isOnScreen(0.3, 0.3))
		return;

	//  Была ли проиграна анимация
	if ($(section).attr('animate') == 'true')
		return;

	$(section).attr('animate', 'true');

	animatePhoto();
	animateInitial();
	animateContainer();
	animateKnowledges();
	return;

	//  Анимация ФИО
	function animateInitial() {
		$(section).find('.section__content_info_card_initial-div').removeClass('hidden');
		return;
	}

	//  Анимация анкеты
	function animateContainer() {
		//  Найти все текстовые поля
		let elems = $(section).find('.field');
		elems.sort((a, b) => {
			if (Number($(a).attr('num')) > Number($(b).attr('num')))
				return 1;
			return -1;
		});

		//  Установить время задержки анимации
		for (let I = 0; I < elems.length; I++) {
			$(elems[I]).css('transition-delay', ((I + 1) * 200)+'ms');
		}

		//  Удалить класс, который маскирует элементы
		$(elems).removeClass('hidden').removeClass('rhidden');
		return;
	}

	//  Анимирование "знаний"
	function animateKnowledges() {
		//  Найти все знания
		let knowledges = $(section).find(".knowledges_container__knowledge-div");
		knowledges.sort((a, b) => {
			if (Number($(a).attr('num')) > Number($(b).attr('num')))
				return 1;
			return -1;
		});
		//  Установить время задержки анимации
		for (let I = 0; I < knowledges.length; I++) {
			$(knowledges[I]).css('transition-delay', ((I + 1) * 200)+'ms');
		}
		//  Удалить класс, который маскирует элементы
		$(knowledges).removeClass('hidden');
	}

	//  Анимация фотографии 
	function animatePhoto() {
		$(section).find('img.photo-img').removeClass('hidden');
		return;
	}

}

//  Инициализация движка анимации
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

//  Блоки анимации
function checkAnimationOnScreen() {
	animateSection('#capitan');
	animateSection('#pasha');
	animateSection('#dima');
	animateSection('#barabulka');
	animateFooter();
	return;
}

// Анимация футера
function animateFooter(){
	const section = $('#members-container');
	if (!$(section).isOnScreen(0.2, 0.2))
		return;
	
	animateMember();
	return;

	//  Анимация участников
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

//  Инициализация
$(document).ready(function () {
	bindMenuScroll();
	checkAnimationOnScreen();
	engineScrollAnimation();
});