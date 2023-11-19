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
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    // when window width is >= 320px
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    2000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const swiperLogo = new Swiper(".swiper-logo", {
  direction: "horizontal",
  slidesPerView: 3,

  loop: true,
  autoplay: {
    delay: 1000,
    pauseOnMouseEnter: true,
    waitForTransition: true,
  },
});
