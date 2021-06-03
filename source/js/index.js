import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "regenerator-runtime/runtime";

import SwiperCore, { Navigation, Pagination } from "swiper/core";

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
