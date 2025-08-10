const section = document.querySelector('section');
const overlay = document.querySelector('.overlay');
const showbtn = document.querySelector('.show-modal');
const closebtn = document.querySelector('.close-btn');

showbtn.addEventListener('click', () => section.classList.add('active'));
closebtn.addEventListener('click', () => section.classList.remove('active'));
overlay.addEventListener('click', () => section.classList.remove('active'));
