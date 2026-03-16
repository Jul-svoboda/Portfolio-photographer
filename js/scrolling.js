const button = document.querySelector('.scroll-down');
const section = document.querySelector('.footer');

button.addEventListener('click', function() {
    section.scrollIntoView({
        behavior: 'smooth'
    });
});
