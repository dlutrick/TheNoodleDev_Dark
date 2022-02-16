let menuItems = document.querySelector(".navbar__links");
let page = document.querySelector(".page");

const openNav = () => {
  menuItems.style.display = "flex";
  menuItems.style.width = "500px";
  page.style.marginLeft = "-500px";
};

const closeNav = () => {
  menuItems.style.display = "none";
  menuItems.style.width = "0px";
  page.style.marginLeft = "0px";
};

closeNav();

const toggleNav = () => {
  if (menuItems.style.width === "0px") {
    openNav();
  } else {
    closeNav();
  }
};
