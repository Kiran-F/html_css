const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('header .navigation');

menuBtn.addEventListener('click', ()=>{
        menuBtn.classList.toggle('active');

    if(!menuBtn.classList.contains('active')){
        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        sidebar.classList.remove('active');
    }else{
        menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        sidebar.classList.add('active');
    }
});

//js for vdo slider
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.vdo-slide');
const contents = document.querySelectorAll('.content');


let sliderNav = function(manual){
    btns.forEach((btn) => btn.classList.remove('active'));
    slides.forEach((slide) => slide.classList.remove('active'));
    contents.forEach((content) => content.classList.remove('active'));

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');
}
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => sliderNav(i));
});