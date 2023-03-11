import './styles/main.less';
//#4
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search input');
//#6
const header = document.querySelector('.header');
//but
const blogItemIco = document.querySelectorAll('.blogItem__ico');


//#4
searchInput.addEventListener('focus', () => {
	search.classList.add('focus');
});
searchInput.addEventListener('blur', () => {
	search.classList.remove('focus');
});

//#6
window.addEventListener('scroll', function() {
	let scrollTop2 = window.pageYOffset;
	if (scrollTop2 > 0) {
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');

	}
});
var slider2 = new Swiper('#slider2', {
	spaceBetween: 10,
	slidesPerView: 6.2,
	breakpoints: {
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
//#but
blogItemIco.forEach(function (item) {
	item.addEventListener('click', () => {
		item.classList.toggle('act');
	});
});