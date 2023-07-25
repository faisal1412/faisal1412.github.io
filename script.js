//toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketik diklik muncul
document.querySelector('#menu'). onclick = () => {
	navbarNav.classList.toggle('active');
};

//klik diluar sidebar agar hilang menu
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
	if(menu.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
});