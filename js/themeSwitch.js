const THEMESWITCH = document.getElementById('themeSwitch');
const THEMEBTN = document.querySelector('.checkbox-icon')
const HEADERCOLOR = document.querySelector('header');
const MAINCOLOR = document.querySelector('main');
const FOOTERCOLOR = document.querySelector('footer');
const JUMBOTRONCOLOR = document.querySelector('#jumbotron')
const CARDCOLORS = document.querySelectorAll('.card-color');
const BTNCOLORS = document.querySelectorAll('.contact-btn');
const ICONCOLORS = document.querySelectorAll('.icon-color');
const NEOMOCOLORS = document.querySelectorAll('.neomo-color');
const NAVCOLOR = document.querySelector('#header-nav');


THEMESWITCH.addEventListener('click', () => {
    THEMEBTN.classList.toggle('checkbox-icon');
    THEMEBTN.classList.toggle('checkbox-icon-dark')
    HEADERCOLOR.classList.toggle('header-color');
    HEADERCOLOR.classList.toggle('header-color-dark');
    MAINCOLOR.classList.toggle('main-color');
    MAINCOLOR.classList.toggle('main-color-dark');
    FOOTERCOLOR.classList.toggle('footer-color');
    FOOTERCOLOR.classList.toggle('footer-color-dark');
    JUMBOTRONCOLOR.classList.toggle('jumbotron-color');
    JUMBOTRONCOLOR.classList.toggle('jumbotron-color-dark');
    CARDCOLORS.forEach(CARDCOLOR => {
        CARDCOLOR.classList.toggle('card-color');
        CARDCOLOR.classList.toggle('card-color-dark');
    });
    BTNCOLORS.forEach(BTNCOLOR => {
        BTNCOLOR.classList.toggle('btn-color');
        BTNCOLOR.classList.toggle('btn-color-dark');
    });
    ICONCOLORS.forEach(ICONCOLOR => {
        ICONCOLOR.classList.toggle('icon-color');
        ICONCOLOR.classList.toggle('icon-color-dark'); 3
    });
    NEOMOCOLORS.forEach(NEOMOCOLOR => {
        NEOMOCOLOR.classList.toggle('neomo-color');
        NEOMOCOLOR.classList.toggle('neomo-color-dark'); 3
    });
    NAVCOLOR.classList.toggle('navbar-light');
    NAVCOLOR.classList.toggle('navbar-dark');
});