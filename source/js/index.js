import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "regenerator-runtime/runtime";

import SwiperCore, { Navigation, Pagination } from "swiper/core";

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    dynamicMainBullets: 10,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

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
      .querySelector(`#section--${i + 1}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});
