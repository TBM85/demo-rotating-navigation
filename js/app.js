const container = document.querySelector(".container");
const btnMenu = document.querySelector(".btn-menu");

const secondMenuItem = document.querySelector("li:nth-child(2)");
const thirdMenuItem = document.querySelector("li:nth-child(3)");

let isCrossing = false;

// When the hamburger menu is clicked:
// the shape toggle between a cross and the original shape, 
// the container //// alternates between rotating or not,
// horizontal scrolling of the second and third menu items
btnMenu.addEventListener("click", () => {
  if (!isCrossing) {
    btnMenu.classList.add("open");
    isCrossing = true;
    container.classList.add("show");
    secondMenuItem.style.transition = "all .5s ease-in-out";
    secondMenuItem.style.marginLeft = "5px";
    thirdMenuItem.style.transition = "all .5s ease-in-out";
    thirdMenuItem.style.marginLeft = "15px";
  } else {
    btnMenu.classList.remove("open");
    isCrossing = false;
    container.classList.remove("show");
    secondMenuItem.style.transition = "all .5s ease-in-out";
    secondMenuItem.style.marginLeft = "-5px";
    thirdMenuItem.style.transition = "all .5s ease-in-out";
    thirdMenuItem.style.marginLeft = "-10px";
  }
});
