const $nav = document.querySelector('.nav');
const $menu = document.querySelector('.header__menu');
const $close = document.querySelector('.nav__close');
const $opacity = document.querySelector('.opacity');

$menu.addEventListener('click', (e)=>{
    $nav.classList.toggle('nav--on');
    $opacity.classList.add('opacity-on');
});

$close.addEventListener('click',(e)=>{
    $nav.classList.toggle('nav--on');
    $opacity.classList.remove('opacity-on');
});
