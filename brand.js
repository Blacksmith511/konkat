import './styles/main.less';
//#1
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search input');
//#2
const header = document.querySelector('.header');

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
const productCont = document.querySelector('.fixedButtonCart');
let scrolltop = pageYOffset; // запомнить

window.addEventListener('scroll', function(){
  if (pageYOffset >= 460) { // сравнить
		productCont.classList.add('act');
    console.log('Scroll down');
  } else {
		productCont.classList.remove('act');
    console.log('Scroll Up');
  }
  scrolltop = pageYOffset; // запомнить для последующих срабатываний
});