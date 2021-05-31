// import Swiper from "swiper";
// // import Swiper, { Navigation, Pagination } from "swiper";
// import "swiper/swiper-bundle.css";
// import "regenerator-runtime/runtime";
// SwiperCore.use([Navigation, Pagination]);

// import SwiperCore, { Navigation, Pagination } from "swiper/core";

// const swiper = new Swiper(".swiper-container", {
//   spaceBetween: 40,
//   slidesPerView: 1,

//   pagination: {
//     el: ".swiper-pagination",
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

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

// $(function () {
//   $("#container").simpleCalendar();
// });
const btnNav = document.querySelector(".navigation__button");
const navNav = document.querySelector(".navigation__nav");
const navList = document.querySelector(".navigation__list");
const navItem = document.querySelector(".navigation__item");

btnNav.addEventListener("click", function () {
  if ((navNav.style.display = "none")) {
    navNav.style.display = "block";
    // navList.style.display = "block";
  } else if ((navNav.style.display = "block")) {
    navNav.style.display = "none";
    // navList.style.display = "none";
  }
});
