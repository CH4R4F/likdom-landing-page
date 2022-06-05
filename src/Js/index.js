const mobileNav = document.querySelector(".mobileNav");
const burger = document.querySelector(".burger");
const hideNav = document.querySelector(".mobileNav span");

const toTopBtn = document.querySelector(".to__top");

const swiperReview = new Swiper(".swiper", {
  spaceBetween: 90,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 768px
    978: {
      slidesPerView: 3,
      spaceBetween: 30,
      // centeredSlides:true,
    },
  },
});

swiperReview.slideTo(1, 600);

// hide and show mobile nav
burger.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
  document.body.style.overflow = "hidden";
});
hideNav.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
  document.body.style.overflow = "auto";
});

// show to top button when scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTopBtn.style.opacity = "1";
  } else {
    toTopBtn.style.opacity = "0";
  }
});

// scroll to top
toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
