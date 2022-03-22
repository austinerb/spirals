let services = document.querySelector(".services");
let navDropdown = document.querySelector(".nav-dropdown");
let navDropdownExit = document.querySelector(".nav-dropdown-exit");

services.addEventListener("click", function() {
  navDropdown.classList.toggle("display-none");
  navDropdownExit.classList.toggle("display-none");
});

navDropdownExit.addEventListener("click", function() {
  navDropdown.classList.toggle("display-none");
  navDropdownExit.classList.toggle("display-none");
});


let navMobileMenuBtn = document.querySelector(".nav-menu-btn");
let navMobileMenuBars = document.querySelector(".bars");
let navMobileMenuClose = document.querySelector(".close");
let navMobileMenu = document.querySelector(".nav-menu");
// let content = document.querySelector(".content");

navMobileMenuBtn.addEventListener("click", function() {
  navMobileMenuBars.classList.toggle("display-none");
  navMobileMenuClose.classList.toggle("display-none");
  navMobileMenu.classList.toggle("display-none");
  // content.classList.toggle("display-none");
});
