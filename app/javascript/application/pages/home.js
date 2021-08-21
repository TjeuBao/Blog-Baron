import Swiper from 'swiper';

var swiper = new Swiper('.swiper_index_product', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '#next-product',
    prevEl: '#prev-product',
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
