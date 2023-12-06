const burgerMenuBtn = document.querySelector(".burger-menu-btn");
const navBarOptions = document.querySelector(".nav-options");
const navLogo = document.querySelector(".logo");
const search = document.querySelector("header .search");
// HACK until serach engine work
search.innerHTML = "";

navLogo.addEventListener("click", () => {
  location.replace(window.location.origin);
});

burgerMenuBtn.addEventListener("click", (e) => {
  e.preventDefault;
  e.target.closest(".burger-menu-btn").classList.toggle("open");
  navBarOptions.classList.toggle("open");
});

function toggleSearchBar(state) {
  if (state) {
  }
}

function showHideNavigationSlide(swiper) {
  const swiperBreakpoint = swiper.currentBreakpoint;
  const swiperSlides = swiper.slides.length;
  let slideBreakpointNumber = swiper.params.slidesPerView;

  if (parseInt(swiperBreakpoint)) {
    slideBreakpointNumber =
      swiper.params.breakpoints[swiperBreakpoint].slidesPerView;
  }

  if (slideBreakpointNumber >= swiperSlides) {
    swiper.disable();
    swiper.navigation.nextEl.style.display = "none";
    swiper.navigation.prevEl.style.display = "none";
  } else {
    swiper.enable();
    swiper.navigation.nextEl.style.display = "block";
    swiper.navigation.prevEl.style.display = "block";
  }
}

function slideResizeHandler(swipers) {
  console.log("ici");
  const swiperkeys = Object.keys(swipers);
  const swiperNumber = swiperkeys.length;
  setTimeout(() => {
    if (swiperNumber < 10) {
      for (const key in swipers) {
        showHideNavigationSlide(swipers[key]);
      }
    } else {
      showHideNavigationSlide(swipers);
    }
  }, 100);
}
