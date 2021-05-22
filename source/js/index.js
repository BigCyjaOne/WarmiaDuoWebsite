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
