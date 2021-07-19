import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "regenerator-runtime/runtime";

import SwiperCore, { Navigation, Pagination } from "swiper/core";
import animateScrollTo from "animated-scroll-to";

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// const btn = document.querySelector(".navigation__nav");
// const bgc = document.querySelector(".background");
// const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".navigation");
const menuWrapper = document.querySelector(".menu-wrapper");
const links = [...document.querySelectorAll(".menu__link")];

links.forEach((link) =>
  link.addEventListener("click", function () {
    menuWrapper.classList.remove("active");
  })
);

hamburger.addEventListener("click", function () {
  menuWrapper.classList.toggle("active");
});

links.forEach((link, i) => {
  link.addEventListener("click", function () {
    document
      .querySelector(`#t--${i + 1}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});
