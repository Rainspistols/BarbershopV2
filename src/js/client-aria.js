"use strict"

let clientAria = document.querySelector(".client-aria"),
  mainNav = document.querySelector(".main-nav"),
  mainNavOpen = document.querySelector(".main-nav--open"),
  mainNavClosed = document.querySelector(".main-nav--closed"),
  closeBtn = document.querySelector(".client-aria__button-close"),
  loginBtn = document.querySelector(".user-list__btn"),
  loginIcon = document.querySelector(".user-list__user-icon");

loginBtn.addEventListener("click", function () {
  if (!clientAria.classList.contains("js-show-block")) {
    clientAria.classList.add("js-show-block");
  };
  if (mainNav.classList.contains("js-show-block")) {
    mainNav.classList.remove("js-show-block");
  };
  if (mainNav.classList.contains("main-nav--open")) {
    mainNav.classList.remove("main-nav--open"),
      mainNav.classList.add("main-nav--closed");
  };
});

loginBtn.addEventListener("click", function () {
  if (!clientAria.classList.contains("js-show-block")) {
    clientAria.classList.add("js-show-block");
  };
  if (mainNav.classList.contains("js-show-block")) {
    mainNav.classList.remove("js-show-block");
  };
  if (mainNav.classList.contains("main-nav--open")) {
    mainNav.classList.remove("main-nav--open"),
      mainNav.classList.add("main-nav--closed");
  };
});

closeBtn.addEventListener("click", function () {
  if (clientAria.classList.contains("js-show-block")) {
    clientAria.classList.remove("js-show-block");
  };
  if (mainNav.classList.contains("main-nav--open")) {
    mainNav.classList.remove("main-nav--open"),
      mainNav.classList.add("main-nav--closed");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (clientAria.classList.contains("js-show-block")) {
      clientAria.classList.remove("js-show-block");
    };
    if (mainNav.classList.contains("main-nav--open")) {
      mainNav.classList.remove("main-nav--open"),
        mainNav.classList.add("main-nav--closed");
    };
  };
});
