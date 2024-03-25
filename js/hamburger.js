const dropDown = document.querySelector(".hamburger-dropdown");
const hamburgerBg = document.querySelector(".hamburger-bg");
const hamburger = document.querySelector(".hamburger");
const menuLi = document.querySelector(".menu-li-drop");

function closeHamburger() {
  hamburgerBg.style.display = "none";
  hamburger.style.transform = "translateX(-100%)";
  document.body.style.overflow = "";
}
function openHamburger() {
  hamburgerBg.style.display = "block";
  hamburger.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
}

function openDropdownHamburger() {
  dropDown.classList.toggle("hide");
  document.querySelector(".turnIcon").classList.toggle("rotate");
  document.querySelector(".changeIcon").classList.toggle("fa-plus");
  document.querySelector(".changeIcon").classList.toggle("fa-minus");
  menuLi.style.borderBottom = "none";
}
