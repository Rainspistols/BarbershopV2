"use strict"

$(function() {
  $(".advantages__list").slick({
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      }
    ]
  });
});

$(function() {
  $(".reviews__list").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst:true,
    fade: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          autoplay: false,
          prevArrow: '<button><img class="left" src="./img/next.svg"></button>',
          nextArrow: '<button><img class="right" src="./img/next.svg"></button>'
        }
      }
    ]
  });
});