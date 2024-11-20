const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const header = document.getElementById('Search_box');
window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
        header.classList.add('blurred');
    } else {
        header.classList.remove('blurred');
    }
});
const inputElement = document.getElementById('SearchText');

inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        window.open('https://www.mi.com/shop/search?keyword='+inputElement.value);
    }
});
function showSlide(slideIndex) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[slideIndex].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}
function afterSlide() {
    currentSlide--;
    if (currentSlide <= 0) {
        currentSlide = slides.length-1;
    }
    showSlide(currentSlide);
}

function startSlideshow() {
    setInterval(nextSlide, 5000); // 每隔3秒切换一次轮播图
}


startSlideshow();
nextSlide();