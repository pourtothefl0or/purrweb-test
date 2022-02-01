// === SWIPER ===
const swiper = new Swiper(".hero-slider", {
    direction: "horizontal",
    loop: true,

    autoplay: {
        delay: 5000,
    },

    effect: 'cube',
    cubeEffect: {
        shadow: false,
        slideShadows: false,
    },

    pagination: {
        el: ".hero-pagi",
        type: "bullets",
        bulletClass: "hero-pagi__item",
        bulletActiveClass: "hero-pagi__item--active",
        clickable: true,
    },
});

const sliderHero = document.querySelector('.hero-slider');
sliderHero.addEventListener("mouseleave", function (e) { swiper.autoplay.start(); });
sliderHero.addEventListener("mouseenter", function (e) { swiper.autoplay.stop(); });
// === / SWIPER ===


// === MODAL ===
const btns = document.querySelectorAll('#btn-modal'),
    modalOverlay = document.querySelector('.modal-overlay'),
    modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            modalOverlay.classList.remove('modal-overlay--visible');
            el.classList.remove('modal--visible');
            body.style.overflowY = '';
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
        body.style.overflowY = 'hidden';
    });
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
            body.style.overflowY = '';
        });
    }
});
// === / MODAL ===


// === BURGER ===
const buttonBurger = document.querySelector('.btn-burger'),
    navList = document.querySelector('.nav__list'),
    navLink = document.querySelectorAll('.nav__link'),
    body = document.querySelector('body');

buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.toggle('btn-burger--close');
    navList.classList.toggle('nav__list--visible');
    body.style.overflowY = (body.style.overflowY == 'hidden') ? '' : 'hidden';

    navLink.forEach((e) => {
        e.addEventListener('click', () => {
            resetNav();
        });
    });
});

const resetNav = () => {
    buttonBurger.classList.remove('btn-burger--close');
    navList.classList.remove('nav__list--visible');
}
// === / BURGER ===