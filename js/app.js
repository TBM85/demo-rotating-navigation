const container = document.querySelector(".container");
const btnMenu = document.querySelector(".btn-menu");

let isCrossing = false;

// When the hamburger menu is clicked, the shape toggle between a cross and the original shape. And the container alternates between rotating or not
btnMenu.addEventListener("click", () => {
  if (!isCrossing) {
    btnMenu.classList.add("open");
    isCrossing = true;
    container.classList.add("show");
  } else {
    btnMenu.classList.remove("open");
    isCrossing = false;
    container.classList.remove("show");
  }
});
