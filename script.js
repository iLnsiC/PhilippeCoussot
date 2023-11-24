const burgerMenuBtn = document.querySelector(".burger-menu-btn");
const navBarOptions = document.querySelector(".nav-options");
burgerMenuBtn.addEventListener("click", (e) => {
  e.preventDefault;
  e.target.closest(".burger-menu-btn").classList.toggle("open");
  navBarOptions.classList.toggle("open");
});

function toggleSearchBar(state) {
  if (state) {
  }
}

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
  slidesPerView: 4,
  grabCursor: true,
  slideToClickedSlide: true,
  roundLengths: true,
  breakpoints: {
    800: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 9,
      spaceBetween: 10,
    },
  },
  loop: true,
  autoplay: {
    delay: 1000,
    pauseOnMouseEnter: true,
    waitForTransition: true,
  },
});

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


const swiperExperience = new Swiper(".swiper-experience", {
  direction: "vertical",
  loop: true,
  parallax: true,
  centeredSlides: true,
  setWrapperSize: true,
  roundLengths: true,
  grabCursor: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    1: {
      slidesPerView: 5,
      spaceBetween: 10,
      height: 300,
    },
    800: {
      slidesPerView: 5,
      spaceBetween: 10,
      height: 510,
    },
  },
});