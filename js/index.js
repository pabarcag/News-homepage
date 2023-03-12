const $nav = document.querySelector('.nav');
const $menu = document.querySelector('.header__menu');
const $close = document.querySelector('.nav__close');


$menu.addEventListener('click', (e)=>{
    $nav.classList.toggle('nav--on');
});

$close.addEventListener('click',(e)=>{
    $nav.classList.toggle('nav--on');
});
