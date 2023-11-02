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
