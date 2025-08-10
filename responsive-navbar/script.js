const menuBtn = document.querySelector('#menu_btn');
const crossBtn = document.querySelector('#cross_btn');
const sidebar = document.querySelector('nav');

menuBtn.addEventListener('click', () =>{
    sidebar.classList.add('activeMenu')
});
crossBtn.addEventListener('click', () => {
    sidebar.classList.remove('activeMenu');
});