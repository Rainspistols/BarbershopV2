"use strict"

let slideBtn1 = document.querySelector(".reviews__toggle1"),
  slideBtn2 = document.querySelector(".reviews__toggle2"),
  slideBtn3 = document.querySelector(".reviews__toggle3");
let slide1 = document.querySelector(".reviews__item1"),
  slide2 = document.querySelector(".reviews__item2"),
  slide3 = document.querySelector(".reviews__item3");


  slideBtn1.addEventListener("click", function () {
  if (slide2.classList.contains("js-show")) {
    slide2.classList.remove("js-show");
    slide2.classList.add("js-none");
  };
  if (slide3.classList.contains("js-show")) {
    slide3.classList.remove("js-show");
    slide3.classList.add("js-none");
  };
  if (slide1.classList.contains("js-none")) {
    slide1.classList.remove("js-none");
  };
  slide1.classList.add("js-show");

  if (!slideBtn1.classList.contains("slider--black__toggle--current")) {
    slideBtn1.classList.add("slider--black__toggle--current");
  };
  if (slideBtn2.classList.contains("slider--black__toggle--current")) {
    slideBtn2.classList.remove("slider--black__toggle--current");
  };
  if (slideBtn3.classList.contains("slider--black__toggle--current")) {
    slideBtn3.classList.remove("slider--black__toggle--current");
  };
});

slideBtn2.addEventListener("click", function () {
  if (slide1.classList.contains("js-show")) {
    slide1.classList.remove("js-show");
    slide1.classList.add("js-none");
  };
  if (slide3.classList.contains("js-show")) {
    slide3.classList.remove("js-show");
    slide3.classList.add("js-none");
  };
  if (slide2.classList.contains("js-none")) {
    slide2.classList.remove("js-none");
  };
  slide2.classList.add("js-show");

  if (!slideBtn2.classList.contains("slider--black__toggle--current")) {
    slideBtn2.classList.add("slider--black__toggle--current");
  };
  if (slideBtn1.classList.contains("slider--black__toggle--current")) {
    slideBtn1.classList.remove("slider--black__toggle--current");
  };
  if (slideBtn3.classList.contains("slider--black__toggle--current")) {
    slideBtn3.classList.remove("slider--black__toggle--current");
  };
});

slideBtn3.addEventListener("click", function () {
  if (slide2.classList.contains("js-show")) {
    slide2.classList.remove("js-show");
    slide2.classList.add("js-none");
  };
  if (slide1.classList.contains("js-show")) {
    slide1.classList.remove("js-show");
    slide1.classList.add("js-none");
  };
  if (slide3.classList.contains("js-none")) {
    slide3.classList.remove("js-none");
  };
  slide3.classList.add("js-show");

  if (!slideBtn3.classList.contains("slider--black__toggle--current")) {
    slideBtn3.classList.add("slider--black__toggle--current");
  };
  if (slideBtn1.classList.contains("slider--black__toggle--current")) {
    slideBtn1.classList.remove("slider--black__toggle--current");
  };
  if (slideBtn2.classList.contains("slider--black__toggle--current")) {
    slideBtn2.classList.remove("slider--black__toggle--current");
  };
})
