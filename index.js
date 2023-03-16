import './styles/main.less';
//#2
const fz = document.querySelector('.fz');
const ff = document.querySelectorAll('.ff');
const childMenus = document.querySelector('.childrenMenus');
//#podmenu
const cMlink1 = document.querySelector('.catalogMenu__link--1');
const cMlink2 = document.querySelector('.catalogMenu__link--2');
const cMlink3 = document.querySelector('.catalogMenu__link--3');
const cMlink4 = document.querySelector('.catalogMenu__link--4');
const cMlink5 = document.querySelector('.catalogMenu__link--5');
const cMlink6 = document.querySelector('.catalogMenu__link--6');
const cMlink7 = document.querySelector('.catalogMenu__link--7');
const cMlink8 = document.querySelector('.catalogMenu__link--8');
const cMlink9 = document.querySelector('.catalogMenu__link--9');
const cMlink10 = document.querySelector('.catalogMenu__link--10');
const cMlink11 = document.querySelector('.catalogMenu__link--11');
const cMlink12 = document.querySelector('.catalogMenu__link--12');
const cMlink13 = document.querySelector('.catalogMenu__link--13');
const cMlink14 = document.querySelector('.catalogMenu__link--14');
const cMlDef = document.querySelector('.childrenMenus__link--default');
const cMl1 = document.querySelector('.childrenMenus__link--1');
const cMl2 = document.querySelector('.childrenMenus__link--2');
const cMl3 = document.querySelector('.childrenMenus__link--3');
const cMl4 = document.querySelector('.childrenMenus__link--4');
const cMl5 = document.querySelector('.childrenMenus__link--5');
const cMl6 = document.querySelector('.childrenMenus__link--6');
const cMl7 = document.querySelector('.childrenMenus__link--7');
const cMl8 = document.querySelector('.childrenMenus__link--8');
const cMl9 = document.querySelector('.childrenMenus__link--9');
const cMl10 = document.querySelector('.childrenMenus__link--10');
const cMl11 = document.querySelector('.childrenMenus__link--11');
const cMl12 = document.querySelector('.childrenMenus__link--12');
const cMl13 = document.querySelector('.childrenMenus__link--13');
const cMl14 = document.querySelector('.childrenMenus__link--14');

//#3
const topMenu = document.querySelector('.topMenu');
const topMenuContent = document.querySelector('.topMenuContent');
//#4
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search input');
//#5
const mobButton = document.querySelector('.header__mobMenu');
const mobCatalogMenu = document.querySelector('.mobCatalogMenu');
const bodys = document.querySelector('body');
const mobileMenuContent = document.querySelector('.mobileMenuContent');
const mobileMenuContentBut = document.querySelector('.mobileMenuContent__but');
const mobileMenuA = document.querySelectorAll('.night');
const mobileMenuContentPerv = document.querySelector('.mobileMenuContent__perv');
const mobileMenuA1 = document.querySelectorAll('.night1');
const mobileMenuContentPerv1 = document.querySelector('.mobileMenuContent__perv1');
const mMenuzTitleButton = document.querySelector('.mMenuz__title button');
const mMenuzTitleButton1 = document.querySelector('.mMenuz__title1 button');
const mMenuzClose = document.querySelectorAll('.mMenuz__close');
//#6
const header = document.querySelector('.header');


//#2
fz.addEventListener('mouseenter', () => {
	fz.classList.add('container__elem--15');
	fz.classList.add('container__elem--df');
	fz.classList.remove('container__elem--3');
	childMenus.style.display = 'flex';
	ff.forEach(function (item) {
		item.classList.add('hide');
	});
});
fz.addEventListener('mouseleave', () => {
	fz.classList.remove('container__elem--15');
	fz.classList.remove('container__elem--df');
	fz.setAttribute('data-ho', '0');
	fz.classList.add('container__elem--3');
	childMenus.style.display = 'none';
	ff.forEach(function (item) {
		item.classList.remove('hide');
	});
});

//#podmenu
cMlink1.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '1');
	cMlDef.classList.add('hide');
});
cMlink1.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink2.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '2');
	cMlDef.classList.add('hide');
});
cMlink2.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink3.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '3');
	cMlDef.classList.add('hide');
});
cMlink3.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink4.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '4');
	cMlDef.classList.add('hide');
});
cMlink4.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink5.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '5');
	cMlDef.classList.add('hide');
});
cMlink5.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink6.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '6');
	cMlDef.classList.add('hide');
});
cMlink6.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink7.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '7');
	cMlDef.classList.add('hide');
});
cMlink7.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink8.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '8');
	cMlDef.classList.add('hide');
});
cMlink8.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink9.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '9');
	cMlDef.classList.add('hide');
});
cMlink9.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink10.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '10');
	cMlDef.classList.add('hide');
});
cMlink10.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink11.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '11');
	cMlDef.classList.add('hide');
});
cMlink11.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink12.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '12');
	cMlDef.classList.add('hide');
});
cMlink12.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink13.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '13');
	cMlDef.classList.add('hide');
});
cMlink13.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});
cMlink14.addEventListener('mouseenter', () => {
	fz.setAttribute('data-ho', '14');
	cMlDef.classList.add('hide');
});
cMlink14.addEventListener('mouseleave', () => {
	cMlDef.classList.remove('hide');
});


//#3
topMenu.addEventListener('click', () => {
	topMenu.classList.toggle('add');
	topMenuContent.classList.toggle('view');
});

//#4
searchInput.addEventListener('focus', () => {
	search.classList.add('focus');
});
searchInput.addEventListener('blur', () => {
	search.classList.remove('focus');
});

//#5
mobButton.addEventListener('click', () => {
	mobileMenuContent.classList.add('view');
	bodys.classList.add('over');
});
mobCatalogMenu.addEventListener('click', () => {
	mobileMenuContent.classList.add('view');
	bodys.classList.add('over');
});
mobileMenuContentBut.addEventListener('click', () => {
	mobileMenuContent.classList.remove('view');
	bodys.classList.remove('over');
});
mobileMenuA.forEach(function (item1) {
	item1.addEventListener('click', () => {
		mobileMenuContentPerv.classList.add('active');
	});
});
mMenuzTitleButton.addEventListener('click', () => {
	mobileMenuContentPerv.classList.remove('active');
});
mMenuzTitleButton1.addEventListener('click', () => {
	mobileMenuContentPerv1.classList.remove('active');
});
mMenuzClose.forEach(function (item4) {
	item4.addEventListener('click', () => {		
		mobileMenuContent.classList.remove('view');
	});
});
mobileMenuA1.forEach(function (item2) {
	item2.addEventListener('click', () => {
		mobileMenuContentPerv1.classList.add('active');
	});
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

(function () {
	var galleryThumbs = new Swiper('.thumbes', {
		spaceBetween: 0,
		slidesPerView: 7,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.bigImg', {
		spaceBetween: 0,
		effect: 'fade',
		speed: 200,
		grabCursor: true,
		thumbs: {
			swiper: galleryThumbs
		}
	});
	var slider1 = new Swiper('#slider1', {
		spaceBetween: 10,
		slidesPerView: 6.2,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		breakpoints: {
			360: {
				slidesPerView: 1.63,
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
	var slider7 = new Swiper('#slider7', {
		spaceBetween: 10,
		slidesPerView: 2,
		breakpoints: {
			360: {
				slidesPerView: 1.15,
				spaceBetween: 10
			},
			1024: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 1.5,
			},
			1440: {
				slidesPerView: 1.5,
			},
			1920: {
				slidesPerView: 2
			}
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
	var slider3 = new Swiper('#slider3', {
		spaceBetween: 10,
		slidesPerView: 5,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		breakpoints: {
			360: {
				slidesPerView: 1.6,
				spaceBetween: 10
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			1025: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			1200: {
				slidesPerView: 3.75,
				spaceBetween: 10
			},
			1440: {
				slidesPerView: 3.75,
			},
			1920: {
				slidesPerView: 5
			}
		}
	});
	var sliderMob = new Swiper('#sliderMob', {
		spaceBetween: 0,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			bulletActiveClass: 'bull-active',
			bulletClass: 'bull'
		},
	});
	var sliderMob1 = new Swiper('#sliderMob1', {
		spaceBetween: 0,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			bulletActiveClass: 'bull-active',
			bulletClass: 'bull'
		},
	});
})()