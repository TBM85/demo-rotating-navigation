const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

const navMenu = document.querySelector(".nav-menu");

openBtn.addEventListener("click", () => {
  navMenu.classList.remove("show");
  navMenu.classList.add("hide");
})

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("hide");
  navMenu.classList.add("show");
})