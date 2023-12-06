const toggleBtn = {
  desktop: document.querySelectorAll(".toggle-options.dsk button"),
  mobile: document.querySelectorAll(".toggle-options.mbl button"),
};

const filteredElement = document.querySelectorAll(".toggle-el");

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
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

function checkActive() {
  for (const key in toggleBtn) {
    for (let i = 0; i < toggleBtn[key].length; i++) {
      if (toggleBtn[key][i].classList.contains("active")) {
        const theme = toggleBtn[key][i].dataset.theme;
        filteredElement.forEach((el) => {
          el.dataset.theme === theme
            ? el.classList.remove("hide")
            : el.classList.add("hide");
        });
        break;
      }
    }
  }
}

function filterToggle(e) {
  const theme = e.target.dataset.theme;
  for (const key in toggleBtn) {
    toggleBtn[key].forEach((ele) => {
      ele.dataset.theme === theme
        ? ele.classList.add("active")
        : ele.classList.remove("active");
    });
  }
  checkActive();
}

for (const key in toggleBtn) {
  toggleBtn[key].forEach((el) => {
    el.addEventListener("click", filterToggle);
  });
}
checkActive();
