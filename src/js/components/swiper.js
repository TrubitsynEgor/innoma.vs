import Swiper from "swiper";


const whoWeSlider = new Swiper('.who-we__slider', {
  loop: true,
  slidesPerView: 5,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.4,
    },
    380: {
      slidesPerView: 2.5,
    },
    640: {
      slidesPerView: 3.3,
    },
    769: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    }


  }
});

