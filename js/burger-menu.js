const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__navigation');
const burgerLine = document.querySelector('.burger__line')
const burgerLineShort = document.querySelector('.burger__line--short')

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burgerLine.classList.toggle('active');
    burgerLineShort.classList.toggle('active');
});
