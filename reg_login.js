import './styles/main.less';
//#1
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search input');
//#2
const header = document.querySelector('.header');
//#3
const profInfoProfileEnter = document.querySelector('.profInfo__profileEnter');
const regAutoriz = document.querySelector('.regAutoriz');
const bodyz = document.querySelector('body');
const regAutorizClose = document.querySelector('.regAutoriz__close');
const regAutorizReg = document.querySelector('.regAutoriz__reg');
const regAutorizReg2 = document.querySelector('.regAutoriz__reg2');
const regAutorizReg3 = document.querySelector('.regAutoriz__reg3');
const regAutorizContent4 = document.querySelector('.regAutoriz__content4');
const regAutorizContent5 = document.querySelector('.regAutoriz__content5');
const regAutorizContent6 = document.querySelector('.regAutoriz__content6');
const regAutorizContent1 = document.querySelector('.regAutoriz__content1');
const regAutorizClose1 = document.querySelector('.regAutoriz__close1');
const wrClose = document.querySelector('.wr__close');
const wrClose1 = document.querySelector('.wr__close1');
const wrClose2 = document.querySelector('.wr__close2');
const regAutorizWtfa = document.querySelector('.regAutoriz__wtf a');
const regAutorizWtf1a = document.querySelector('.regAutoriz__wtf1 a');
const regAutorizContent2 = document.querySelector('.regAutoriz__content2');
const zabili = document.querySelector('.zabili');
const regAutorizContent3 = document.querySelector('.regAutoriz__content3');
const regAutorizClose2 = document.querySelector('.regAutoriz__close2');
const regAutorizClose3 = document.querySelector('.regAutoriz__close3');
const regAutorizClose4 = document.querySelector('.regAutoriz__close4');
const regAutorizClose5 = document.querySelector('.regAutoriz__close5');
const regAutorizClose6 = document.querySelector('.regAutoriz__close6');
//#4
const headerMobMenu = document.querySelector('.header__mobMenu');
const regAutorizMob = document.querySelector('.regAutorizMob');
const mimimi = document.querySelector('.mimimi');
const mimimi1 = document.querySelector('.mimimi1');
const regAutorizContent7 = document.querySelector('.regAutoriz__content7');
const butz = document.querySelector('.butz');
const butz1 = document.querySelector('.butz1');

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
//#3
profInfoProfileEnter.addEventListener('click', () => {
	regAutoriz.classList.add('act');
	bodyz.classList.add('over');
});
regAutorizClose.addEventListener('click', () => {
	regAutoriz.classList.remove('act');
	bodyz.classList.remove('over');
});
regAutorizReg.addEventListener('click', () => {
	regAutorizContent1.classList.add('act');
});
regAutorizClose1.addEventListener('click', () => {
	regAutorizContent1.classList.remove('act');
});
wrClose.addEventListener('click', () => {
	regAutorizContent1.classList.remove('act');
});
wrClose1.addEventListener('click', () => {
	regAutorizContent5.classList.add('act');
});
wrClose2.addEventListener('click', () => {
	regAutorizContent6.classList.remove('act');
});
regAutorizWtfa.addEventListener('click', () => {
	regAutorizContent2.classList.add('act');
});
regAutorizClose2.addEventListener('click', () => {
	regAutorizContent2.classList.remove('act');
});
regAutorizWtf1a.addEventListener('click', () => {
	regAutorizContent2.classList.remove('act');
});
zabili.addEventListener('click', () => {
	regAutorizContent3.classList.add('act');
});
regAutorizClose3.addEventListener('click', () => {
	regAutorizContent3.classList.remove('act');
});
regAutorizReg2.addEventListener('click', () => {
	regAutorizContent4.classList.add('act');
});
regAutorizClose4.addEventListener('click', () => {
	regAutorizContent4.classList.remove('act');
});
regAutorizClose5.addEventListener('click', () => {
	regAutorizContent5.classList.remove('act');
});
regAutorizClose6.addEventListener('click', () => {
	regAutorizContent6.classList.remove('act');
});
regAutorizReg3.addEventListener('click', () => {
	regAutorizContent6.classList.add('act');
});
//#4
headerMobMenu.addEventListener('click', () => {
	regAutorizMob.classList.add('act');
	bodyz.classList.add('over');
});
butz.addEventListener('click', () => {
	regAutorizMob.classList.remove('act');
	bodyz.classList.remove('over');
});
mimimi.addEventListener('click', () => {
	regAutoriz.classList.add('act');
});
mimimi1.addEventListener('click', () => {
	regAutorizContent7.classList.add('act');
	regAutoriz.classList.add('act');
});
butz1.addEventListener('click', () => {
	regAutorizContent7.classList.remove('act');
	regAutoriz.classList.remove('act');
});