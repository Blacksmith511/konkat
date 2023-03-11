import './styles/main.less';
//#4
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search input');
//#6
const header = document.querySelector('.header');
//#7
const videokonsult = document.querySelector('.videokonsult');

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
//#7
videokonsult.addEventListener('click', () => {
	videokonsult.classList.toggle('act');
});


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
