import './styles/main.less';
//#1
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search input');
//#2
const header = document.querySelector('.header');

const mi = document.getElementsByClassName('magazItem');
const dani = document.getElementsByClassName('dannie__input');
//#1
searchInput.addEventListener('focus', () => {
	search.classList.add('focus');
});
searchInput.addEventListener('blur', () => {
	search.classList.remove('focus');
});

//#2
window.addEventListener('scroll', function () {
	let scrollTop2 = window.pageYOffset;
	if (scrollTop2 > 0) {
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');

	}
});


function click() {
	for (var i = 0; i < mi.length; ++i) {
		var mic = mi[i].querySelector('.checkbox_vib__real')
		mic.removeAttribute('checked', 'checked');
	}
	var mic = this.querySelector('.checkbox_vib__real')
	mic.setAttribute('checked', 'checked')
  }	

for (var i = 0; i < mi.length; i++) {
	mi[i].addEventListener('click', click, false)
}

function change() {
	this.style.color = '#323232';
  }	

for (var i = 0; i < dani.length; i++) {
	dani[i].addEventListener("change", change, false)
}


// Инициализация превью слайдера
const sliderThumbs = new Swiper('.slider111__thumbs .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 5, // показывать по 5 превью
	spaceBetween: 16, // расстояние между слайдами
	watchSlidesProgress: true,
	navigation: { // задаем кнопки навигации
		nextEl: '.slider111__next', // кнопка Next
		prevEl: '.slider111__prev' // кнопка Prev
	},
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		1025: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider111__images .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	effect: 'fade',
	speed: 1000,
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	allowTouchMove: false, // запрет на прокрутку курсором
	mousewheel: true,
	grabCursor: false, // менять иконку курсора
	thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs // указываем имя превью слайдера
	},
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
			mousewheel: false,
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});
(function () {	
	var slider2 = new Swiper('#slider2', {
		spaceBetween: 10,
		slidesPerView: 6.2,
		breakpoints: {
			360: {
				slidesPerView: 1.5,
				spaceBetween: 10
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 10
			},
			1440: {
				slidesPerView: 5,
			},
			1920: {
				slidesPerView: 6.2
			}
		}
	});
})()
const productCont = document.querySelector('.header__proditemz');
let scrolltop = pageYOffset; // запомнить

window.addEventListener('scroll', function(){
  if (pageYOffset >= 830) { // сравнить
		productCont.classList.add('act');
    console.log('Scroll down');
  } else {
		productCont.classList.remove('act');
    console.log('Scroll Up');
  }
  scrolltop = pageYOffset; // запомнить для последующих срабатываний
});