const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".header__close");
const menuList = document.querySelector(".header__list-left");
const menuShadow = document.querySelector(".menu--close");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("header__list-left--open");
  menuShadow.classList.toggle("menu--open");
});
menuClose.addEventListener("click", () => {
  menuList.classList.remove("header__list-left--open");
  menuShadow.classList.remove("menu--open");
});
