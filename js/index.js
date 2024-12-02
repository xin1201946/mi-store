
const log = prettyLog()
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const header = document.getElementById('Search_box');
const mi_logo=document.getElementById('mi_logo');
const share = document.getElementById('share');
const account = document.getElementById('account');
//菜单打印
let hitokoto=''
fetch('https://international.v1.hitokoto.cn/')
    .then(response => response.json())
    .then(data => {
        log.info(data.from_who === null ? data.from: data.from_who,data.hitokoto);
    })
    .catch(error => {
        log.error('Error fetching data: ', error);
    });

window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
        header.classList.add('blurred');
        mi_logo.classList.add('hidden');
        share.classList.add('black')
        account.classList.add('black');
    } else {
        header.classList.remove('blurred');
        mi_logo.classList.remove('hidden');
        share.classList.remove('black')
        account.classList.remove('black');
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