const slider = document.querySelector('.slider'),
    slides = Array.from(document.querySelectorAll('.slider__item')),
    buttons = document.querySelectorAll('.slider-btn'),
    dots = document.querySelector('.slider-dots');

// === NEXT PREV INDEXING ===
function getNextPrev() {
    const activeSlide = document.querySelector('.slider__item--active'),
        activeIndex = slides.indexOf(activeSlide);
    let next,
        prev;

    // NEXT
    if (activeIndex === slides.length - 1) {
        next = slides[0];
    } else {
        next = slides[activeIndex + 1];
    }

    // PREV
    if (activeIndex === 0) {
        prev = slides[slides.length - 1];
    } else {
        prev = slides[activeIndex - 1];
    }

    return [next, prev];
}
// === / NEXT PREV INDEXING ===

// === STARTING POSITIONS ===
function getInit() {
    const activeSlide = document.querySelector('.slider__item--active'),
        activeIndex = slides.indexOf(activeSlide),
        [next, prev] = getNextPrev();

    slides.forEach((item, index) => {
        if (index === activeIndex) {
            item.style.transform = "translateX(0%)";
        } else if (item === prev) {
            item.style.transform = "translateX(-100%)";
        } else if (item === next || item !== activeIndex) {
            item.style.transform = "translateX(100%)";
        }
    });
}
// === / STARTING POSITIONS ===

// === BTNS FUNCTIONALITY ===
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('slider-btn--next')) {
            getNextSlide();
        } else if (button.classList.contains('slider-btn--prev')) {
            getPrevSlide();
        }
    });
});

function getNextSlide() {
    const currentSlide = document.querySelector('.slider__item--active'),
        currentIndex = slides.indexOf(currentSlide),
        [next, prev] = getNextPrev();

    currentSlide.style.transform = "translate(-100%)";
    currentSlide.classList.remove('slider__item--active');

    next.style.transform = "translate(0%)";
    next.classList.add('slider__item--active');

    getInit();
    getActiveDot();
}

function getPrevSlide() {
    const currentSlide = document.querySelector('.slider__item--active'),
        currentIndex = slides.indexOf(currentSlide),
        [next, prev] = getNextPrev();

    currentSlide.style.transform = "translate(100%)";
    currentSlide.classList.remove('slider__item--active');

    prev.style.transform = "translate(0%)";
    prev.classList.add('slider__item--active');

    getInit();
    getActiveDot();
}
// === / BTNS FUNCTIONALITY ===

// === CREATING DOTS ===
slides.forEach(slide => {
    const dot = document.createElement('span');
    dot.classList.add('slider__dot');
    dots.appendChild(dot);
});
// === / CREATING DOTS ===

// === ACTIVE DOTS ===
function getActiveDot() {
    const currentSlide = document.querySelector('.slider__item--active'),
        currentIndex = slides.indexOf(currentSlide),
        dots = document.querySelectorAll('.slider__dot');
        
    dots.forEach(dot => {
        dot.classList.remove('slider__dot--active');
    });

    dots[currentIndex].classList.add('slider__dot--active');
}
// === / ACTIVE DOTS ===

function getDotSlide(index) {
    const currentSlide = slides[index];

    slides.forEach(slide => {
        slide.classList.remove('slider__item--active');
    });
    
    currentSlide.classList.add('slider__item--active');

    getInit();
    getActiveDot();
}

// === DOTS FUNCTIONALITY ===
function functionalDots() {
    const dots = document.querySelectorAll('.slider__dot');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            getDotSlide(index);
        });
    });
}
// === / DOTS FUNCTIONALITY ===

functionalDots();
getActiveDot();
getInit();