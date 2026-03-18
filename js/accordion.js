const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(event){
    let accordionItem = event.target.closest('.accordion__item');
    if (!accordionItem) return;

    let question = accordionItem.querySelector('.accordion__question')
    let verticalLine = accordionItem.querySelector('.accordion__icon--vertical');
    let answer = accordionItem.querySelector('.accordion__answer');

    
    let items = [...accordion.querySelectorAll('.accordion__item')];
    let index = items.indexOf(accordionItem);

    const isActive = question.classList.contains('active');
    
    for (let item of accordion.querySelectorAll('.accordion__question')){
            item.classList.remove('active');
        }
    for (let item of accordion.querySelectorAll('.accordion__icon--vertical')){
            item.classList.remove('active');
        }
    for (let item of accordion.querySelectorAll('.accordion__answer')){
            item.classList.remove('active');
        }
    

    if (!isActive){
        question.classList.toggle('active');
        verticalLine.classList.toggle('active');
        answer.classList.toggle('active');
        localStorage.setItem('accordion', index);
    } else {
        localStorage.removeItem('accordion');
    }
})

window.addEventListener('load', () => {
    const items = document.querySelectorAll('.accordion__item');
    const savedIndex = localStorage.getItem('accordion');

    let indexToOpen;

    if (savedIndex !== null) {
        indexToOpen = savedIndex;
    } else {
        indexToOpen = 0;
    }

    const item = items[indexToOpen];
    if (!item) return;

    item.querySelector('.accordion__question').classList.add('active');
    item.querySelector('.accordion__icon--vertical').classList.add('active');
    item.querySelector('.accordion__answer').classList.add('active');
});

