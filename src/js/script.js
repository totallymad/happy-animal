const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slide.length;

function updateSlidePos() {
    const offset = -currentIndex * 900;
    slides.style.transform = `translateX(${offset}px)`;
}

function showPrev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSlidePos();
}

function showNext() {
    currentIndex++;
    if (currentIndex > totalSlides - 1) {
        currentIndex = 0;
    }
    updateSlidePos();
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden-header'); // Скрыть хедер при прокрутке вниз
    }

    if (scrollTop === 0) {
        header.classList.remove('hidden-header'); // Скрыть хедер при прокрутке вниз 
    }

    lastScrollTop = scrollTop;
});