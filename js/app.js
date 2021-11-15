let pages = {
  "home": {
    title: "Home",
    content: "Nullam ut lobortis elit. Praesent commodo commodo tortor, eu vestibulum mauris feugiat a. In quis ante eu erat molestie placerat. Fusce tristique maximus placerat. Praesent eget arcu purus. Aliquam ultricies congue vestibulum. Morbi non nisl sit amet magna semper faucibus eget eu nunc. Nunc faucibus augue sit amet urna ornare, ut imperdiet purus tempus."
  },
  "about_us": {
    title: "About us",
    content: "Mauris mollis rhoncus feugiat. Fusce consequat augue ante, in vestibulum lectus commodo nec. Fusce suscipit viverra nisi, eget vehicula urna. Vestibulum in lectus eget lorem commodo aliquam id sit amet risus. Nam molestie tincidunt ipsum ac pharetra. Pellentesque in quam sit amet urna varius blandit. Curabitur a posuere sapien, nec laoreet urna. Proin efficitur massa vitae facilisis scelerisque. Morbi id imperdiet augue, at facilisis nisl."
  },
  "contact_us": {
    title: "Contact us",
    content: {
      email: "rotate.page@gmail.com",
      phone: "+1 (650) 967-1944",
      address: "940 Golden Way, Los Altos, California(CA), 94024"
    }
  }
};

const container = document.querySelector(".container");
const btnMenu = document.querySelector(".btn-menu");

const itemsMenu = document.querySelectorAll("li");

const secondMenuItem = document.querySelector("li:nth-child(2)");
const thirdMenuItem = document.querySelector("li:nth-child(3)");

let isCrossing = false;

const contentTitle = document.querySelector(".content-title");
const contentText = document.querySelector(".content-text");
const contentContact = document.querySelector(".content-contact");
const contentEmail = document.querySelector(".content-email");
const contentPhone = document.querySelector(".content-phone");
const contentAddress = document.querySelector(".content-address");

const btnToContact = document.querySelector(".btn-to-contact");

const navMenu = document.querySelector(".nav-menu");

// When the hamburger menu is clicked:
// the shape toggle between a cross and the original shape, 
// the container //// alternates between rotating or not,
// horizontal scrolling of the second and third menu items
btnMenu.addEventListener("click", () => {
  if (!isCrossing) {
    navMenu.style.display = "block";
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
  let showEmail;
  let showPhone;
  let showAddress;

  switch (page) {
    case "home":
      showTitle = pages.home.title;
      showContent = pages.home.content;
      break;
    case "about_us": 
      showTitle = pages.about_us.title;
      showContent = pages.about_us.content;
      break;
    case "contact_us":
      showTitle = pages.contact_us.title;
      showEmail = pages.contact_us.content.email;
      showPhone = pages.contact_us.content.phone;
      showAddress = pages.contact_us.content.address;
      break;
    default:
      showTitle = pages.home.title;
      showContent = pages.home.content;
      break;
  }

  contentTitle.innerHTML = showTitle;

  if (showTitle === "Contact us") {
    contentContact.style.display = "block";
    contentText.style.display = "none";
    contentEmail.innerHTML = showEmail;
    contentPhone.innerHTML = showPhone;
    contentAddress.innerHTML = showAddress;
  } else {
    contentText.innerHTML = showContent;
    contentContact.style.display = "none";
    contentText.style.display = "block";
  }

  if (showTitle === "Home") {
    btnToContact.style.display = "block";
  } else {
    btnToContact.style.display = "none";
  }
}

// When you click an item in the navigation menu, the page rotation closes and the hamburger menu returns to its normal form
for (let itemMenu of itemsMenu) {
  itemMenu.addEventListener("click", () => {
    closeRotation();
  });
}

// When you click the "Contact Us" button, the page rotation closes and the hamburger menu returns to its normal form
btnToContact.addEventListener("click", () => {
  closeRotation();
});

// The page rotation closes and the hamburger menu returns to its normal form
const closeRotation = () => {
  btnMenu.classList.remove("open");
  isCrossing = false;
  container.classList.remove("show");
}