import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "regenerator-runtime/runtime";

import SwiperCore, { Navigation, Pagination } from "swiper/core";
import animateScrollTo from "animated-scroll-to";

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const btn = document.querySelector(".navigation__nav");
const bgc = document.querySelector(".background");
const menu = document.querySelector(".menu");

btn.addEventListener("click", function () {
  bgc.classList.toggle("active__bgc");
  bgc.classList.toggle("not-active__bgc");
  btn.classList.toggle("active");
  btn.classList.toggle("not-active");
  menu.classList.toggle("not-active__menu");
  menu.classList.toggle("active__menu");
});
const menuLink = document.querySelector(".menu__link");
const link = document.querySelector("#link--1");
const link2 = document.querySelector("#link--2");
const link3 = document.querySelector(".link--3");
const link4 = document.querySelector(".link--4");
const link5 = document.querySelector(".link--5");

const defaultOptions = {
  // Indicated if scroll animation should be canceled on user action (scroll/keypress/touch)
  // if set to "false" user input will be disabled until scroll animation is complete
  cancelOnUserAction: true,

  // Animation easing function, with "easeOutCubic" as default
  easing: (t) => --t * t * t + 1,

  // DOM element that should be scrolled
  // Example: document.querySelector('#element-to-scroll'),
  elementToScroll: window,

  // Horizontal scroll offset
  // Practical when you are scrolling to a DOM element and want to add some padding
  horizontalOffset: 0,

  // Maximum duration of the scroll animation
  maxDuration: 3000,

  // Minimum duration of the scroll animation
  minDuration: 250,

  // Duration of the scroll per 1000px
  speed: 500,

  // Vertical scroll offset
  // Practical when you are scrolling to a DOM element and want to add some padding
  verticalOffset: 0,
};

menuLink.addEventListener("click", function () {
  if (link1) {
    animateScrollTo(document.querySelector(".features"));
  } else if (link2) {
    animateScrollTo(document.querySelector(".bio"));
  }
});
