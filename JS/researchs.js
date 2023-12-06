const toggleBtn = document.querySelectorAll(".toggle-options button");

function filterToggle(e) {
  const activeBtn = document.querySelector(".toggle-options .active");
  const filteredElement = document.querySelectorAll(".toggle-el");
  filteredElement.forEach((ele) => {
    if (
      e.target.dataset.theme === "all" ||
      e.target.dataset.theme === ele.dataset.theme
    ) {
      ele.classList.remove("hide");
    } else if (!ele.classList.contains("hide")) {
      ele.classList.add("hide");
    }
  });
  activeBtn.classList.remove("active");
  e.target.classList.add("active");
}

toggleBtn.forEach((el) => {
  el.addEventListener("click", filterToggle);
});
