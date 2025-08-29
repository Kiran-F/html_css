const slider = document.querySelector('input');
const bar = document.querySelector('.progress-bar');
const thumb = document.querySelector('.thumb');
const slideIcon = document.querySelector('.slideIcon');
slider.addEventListener('input', (e) => {
    let value = slider.value;
    thumb.style.left = value + '%';
    bar.style.width = value + '%';
    if (value < 20) {
        slideIcon.style.marginTop = '0px';
    }
    if (value >= 20) {
        slideIcon.style.marginTop = '-150px';
    }
    if (value >= 40) {
        slideIcon.style.marginTop = '-300px';
    }
    if (value >= 60) {
        slideIcon.style.marginTop = '-450px';
    }
    if (value >= 80) {
        slideIcon.style.marginTop = '-600px';
    }
});