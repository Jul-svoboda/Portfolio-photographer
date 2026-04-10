const works = document.querySelector('.portfolio__gallery');
works.classList.add('no-snap');
let speed = 0;
window.addEventListener('load', () => {
    works.scrollLeft = (works.scrollWidth - works.clientWidth) / 2;
});
works.addEventListener('mouseover', function(event){
    const rect = works.getBoundingClientRect();
    let horizontalCoordinate = event.clientX - rect.left;
    let percent = horizontalCoordinate/rect.width;
    if (percent < 0.3) {
        speed = -(0.3-percent)*20;
    } else if (percent > 0.7) {
        speed = (percent-0.7)*20;
    } else {speed = 0};
})
works.addEventListener('mouseleave', function(){
    speed = 0;
})

function animation() {
    works.scrollLeft = works.scrollLeft + speed;
    requestAnimationFrame(animation);
}
animation();