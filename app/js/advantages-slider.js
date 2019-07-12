"use strict"

var quickBtn = document.querySelector(".slider__toggle1"),
  coolBtn = document.querySelector(".slider__toggle2"),
  expensiveBtn = document.querySelector(".slider__toggle3");
var quickSlide = document.querySelector(".advantages__item--quick"),
  coolSlide = document.querySelector(".advantages__item--cool"),
  expensiveSlide = document.querySelector(".advantages__item--expensive");


quickBtn.addEventListener("click", function () {
  if (coolSlide.classList.contains("js-show")) {
    coolSlide.classList.remove("js-show");
    coolSlide.classList.add("js-none");
  };
  if (expensiveSlide.classList.contains("js-show")) {
    expensiveSlide.classList.remove("js-show");
    expensiveSlide.classList.add("js-none");
  };
  if (quickSlide.classList.contains("js-none")) {
    quickSlide.classList.remove("js-none");
  };
  quickSlide.classList.add("js-show");

  if (!quickBtn.classList.contains("slider__toggle--current")) {
    quickBtn.classList.add("slider__toggle--current");
  };
  if (coolBtn.classList.contains("slider__toggle--current")) {
    coolBtn.classList.remove("slider__toggle--current");
  };
  if (expensiveBtn.classList.contains("slider__toggle--current")) {
    expensiveBtn.classList.remove("slider__toggle--current");
  };
});

coolBtn.addEventListener("click", function () {
  if (quickSlide.classList.contains("js-show")) {
    quickSlide.classList.remove("js-show");
    quickSlide.classList.add("js-none");
  };
  if (expensiveSlide.classList.contains("js-show")) {
    expensiveSlide.classList.remove("js-show");
    expensiveSlide.classList.add("js-none");
  };
  if (coolSlide.classList.contains("js-none")) {
    coolSlide.classList.remove("js-none");
  };
  coolSlide.classList.add("js-show");

  if (!coolBtn.classList.contains("slider__toggle--current")) {
    coolBtn.classList.add("slider__toggle--current");
  };
  if (quickBtn.classList.contains("slider__toggle--current")) {
    quickBtn.classList.remove("slider__toggle--current");
  };
  if (expensiveBtn.classList.contains("slider__toggle--current")) {
    expensiveBtn.classList.remove("slider__toggle--current");
  };
});

expensiveBtn.addEventListener("click", function () {
  if (coolSlide.classList.contains("js-show")) {
    coolSlide.classList.remove("js-show");
    coolSlide.classList.add("js-none");
  };
  if (quickSlide.classList.contains("js-show")) {
    quickSlide.classList.remove("js-show");
    quickSlide.classList.add("js-none");
  };
  if (expensiveSlide.classList.contains("js-none")) {
    expensiveSlide.classList.remove("js-none");
  };
  expensiveSlide.classList.add("js-show");

  if (!expensiveBtn.classList.contains("slider__toggle--current")) {
    expensiveBtn.classList.add("slider__toggle--current");
  };
  if (quickBtn.classList.contains("slider__toggle--current")) {
    quickBtn.classList.remove("slider__toggle--current");
  };
  if (coolBtn.classList.contains("slider__toggle--current")) {
    coolBtn.classList.remove("slider__toggle--current");
  };
})
