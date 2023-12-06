const swiperPeople = new Swiper(".swiper-people", {
  direction: "horizontal",
  loop: true,
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  roundLengths: true,
  slideToClickedSlide: true,
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
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});
