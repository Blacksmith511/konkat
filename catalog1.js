import './styles/main.less';
//#1
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search input');
//#2
const header = document.querySelector('.header');
//#3
const catalogotob = document.querySelector('.catalogotob');
//#4
const catalogOptionsWrap = document.querySelector('.catalogOptionsWrap');
const catalogOptionsItem = document.querySelectorAll('.catalogOptions__item');
const catalogOptionsDown = document.querySelector('.catalogOptions__down');
const catalogOptionsItemActive = document.querySelector('.catalogOptions__item--active');
//#5 filteItems
//#6
const bodys = document.querySelector('body');
const filterMob = document.querySelector('.filterMob');
const filterViewMob = document.querySelector('.filterViewMob');
const clooooooosed = document.querySelector('.clooooooosed');

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

//#3
catalogotob.addEventListener('click', () => {
	catalogotob.classList.toggle('act');
});

//#4
catalogOptionsWrap.addEventListener('click', () => {
	catalogOptionsWrap.classList.add('act');
});
catalogOptionsItem.forEach(function (item) {
	item.addEventListener('click', (event) => {
		event.stopPropagation();
		catalogOptionsWrap.classList.remove('act');
	});
});


//#5
document.body.addEventListener("click", (e1) => {
	if (e1.target.classList.contains("filter-container__activated")) {
		const activez = e1.target.classList.toggle("act");
		if (!activez) {
			e1.target.closest(".filterItem").lastElementChild.className = 'filterItem__content';
		} else {
			e1.target.closest(".filterItem").lastElementChild.className = 'filterItem__content act';
		}
	}
});

//#6
filterMob.addEventListener('click', () => {
	filterViewMob.classList.add('view');
	bodys.classList.add('over');
});
clooooooosed.addEventListener('click', () => {
	filterViewMob.classList.remove('view');
	bodys.classList.remove('over');
});