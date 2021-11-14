let pages = {
  "home": {
    title: "Home",
    content: "Welcome"
  },
  "photos": {
    title: "Photos",
    content: "These are our photos"
  },
  "videos": {
    title: "Videos",
    content: "These are our videos"
  }
}

const container = document.querySelector(".container");
const btnMenu = document.querySelector(".btn-menu");

const itemsMenu = document.querySelectorAll("li");

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
    closeRotation();
    secondMenuItem.style.transition = "all .5s ease-in-out";
    secondMenuItem.style.marginLeft = "-5px";
    thirdMenuItem.style.transition = "all .5s ease-in-out";
    thirdMenuItem.style.marginLeft = "-10px";
  }
});

// When you click an item in the navigation menu, its content is displayed
const getPageContent = (page) => {
  let showTitle;
  let showContent;

  switch (page) {
    case "home":
      showTitle = pages.home.title;
      showContent = pages.home.content;
      break;
    case "photos": 
      showTitle = pages.photos.title;
      showContent = pages.photos.content;
      break;
    case "videos":
      showTitle = pages.videos.title;
      showContent = pages.videos.content;
      break;
    default:
      showTitle = pages.home.title;
      showContent = pages.home.content;
      break;
  }

  document.querySelector(".content-title").innerHTML = showTitle;
  document.querySelector(".content-text").innerHTML = showContent;
}

// When you click an item in the navigation menu, the page rotation closes and the hamburger menu returns to its normal form
for (let itemMenu of itemsMenu) {
  itemMenu.addEventListener("click", () => {
    closeRotation();
  });
}

// The page rotation closes and the hamburger menu returns to its normal form
const closeRotation = () => {
  btnMenu.classList.remove("open");
  isCrossing = false;
  container.classList.remove("show");
}