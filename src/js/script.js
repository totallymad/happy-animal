//  Слайдер

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if (slides) {
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
}

// Скрытие навигации при прокуртке

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


// табы

const tabs = document.querySelectorAll('.account__tab');
const contents = document.querySelectorAll('.account__content');


if (tabs) {
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('account__tab-active'));
            tab.classList.add('account__tab-active');

            contents.forEach(c => c.classList.remove('account__content-active'));
            contents[index].classList.add('account__content-active');
        })
    })
}