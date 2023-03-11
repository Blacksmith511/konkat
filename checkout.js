import './styles/main.less';
//#1
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search input');
const mi = document.getElementsByClassName('magazItem');
//#2
const header = document.querySelector('.header');

//#1
searchInput.addEventListener('focus', () => {
	search.classList.add('focus');
});
searchInput.addEventListener('blur', () => {
	search.classList.remove('focus');
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