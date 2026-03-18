const model = document.querySelector('.model');

document.addEventListener('click', function(event) {
    let button = event.target.closest('.button');
    if (!button) return;
    model.classList.add('active');
    document.documentElement.classList.add('no-scroll');
});

model.addEventListener('click', function(event){
    if (event.target === model || event.target.closest('.model-cross')) {
        model.classList.remove('active');
        document.documentElement.classList.remove('no-scroll');
    };
});