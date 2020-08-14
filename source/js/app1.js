var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var headerBg = document.querySelector('.page-header__bg');

headerBg.style.setProperty('--menu-height', 66 + 'px');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerBg.style.setProperty('--menu-height', 262 + 'px');
} else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerBg.style.setProperty('--menu-height', 66 + 'px');
}
});
