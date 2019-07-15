let showBtn = document.querySelector(".news__button"),
  newsBlock = document.querySelector(".news__item--mobile3");

showBtn.addEventListener("click", function() {
  if (!newsBlock.classList.contains("js-show")) {
    newsBlock.classList.add("js-show");
  } else {
    newsBlock.classList.remove("js-show");
  }
})
