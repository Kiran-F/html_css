const left = document.querySelector('#left_btn');
const right = document.querySelector('#right_btn');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');


let slideNumber = 1;
const length = images.length;

//for right button
function nextSlide(){
    slider.style.transform =  `translateX(-${slideNumber*600}px)`;
    slideNumber++;
}
function toFirstSlide(){
    slider.style.transform =  `translateX(0px)`;
    slideNumber = 1;
}
right.addEventListener('click', () => {
    slideNumber < length ? nextSlide() : toFirstSlide();
});


//for left button
function prevSlide(){
    slider.style.transform =  `translateX(-${(slideNumber-2)*600}px)`;
    slideNumber--;
}
function toLastSlide(){
    slider.style.transform =  `translateX(-${(length-1)*600}px)`;
    slideNumber = length;
}
left.addEventListener('click', () => {
    slideNumber > 1 ? prevSlide() : toLastSlide();
});