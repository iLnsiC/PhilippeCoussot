const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  slideToClickedSlide: true,
  roundLengths: true,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const swiperLogo = new Swiper(".swiper-logo", {
  direction: "horizontal",
  slidesPerView: 3,
  grabCursor: true,
  roundLengths: true,
  loop: true,
  breakpoints: {
    800: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 1000,
    pauseOnMouseEnter: true,
    waitForTransition: true,
  },
});
function initSwiper() {
  slideResizeHandler(swiper);
  window.addEventListener("resize", () => {
    slideResizeHandler(swiper);
  });
}
initSwiper();
