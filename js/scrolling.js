const button = document.querySelector('.scroll-down');
const section = document.querySelector('.about-me');

button.addEventListener('click', function() {
    section.scrollIntoView({
        behavior: 'smooth'
    });
});
