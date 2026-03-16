const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(event){
    let accordionItem = event.target.closest('.accordion__item');
    if (!accordionItem) return;

    let question = accordionItem.querySelector('.accordion__question')
    let verticalLine = accordionItem.querySelector('.accordion__icon--vertical');
    let answer = accordionItem.querySelector('.accordion__answer');

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
    }
})