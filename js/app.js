const container = document.querySelector(".container");
const btnMenu = document.querySelector(".btn-menu");

let isCrossing = false;

// When the hamburger menu is clicked, the shape toggle between a cross and the original shape
btnMenu.addEventListener("click", () => {
  if (!isCrossing) {
    btnMenu.classList.add("open");
    isCrossing = true;
  } else {
    btnMenu.classList.remove("open");
    isCrossing = false;
  }
});
