const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

const container = document.querySelector(".container");

openBtn.addEventListener("click", () => {
  container.classList.add("show");
})

closeBtn.addEventListener("click", () => {
  container.classList.remove("show");
})