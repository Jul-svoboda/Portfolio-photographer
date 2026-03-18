const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__navigation');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');

    document.documentElement.classList.toggle('no-scroll');
});

nav.addEventListener('click', function(event){

    let link = event.target.closest('a');
    if (!link) return;

    burger.classList.remove('active');
    nav.classList.remove('active');

    document.documentElement.classList.remove('no-scroll');
});