import Swiper from 'swiper';
import {desk} from '../utils/util.js';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

const initAbout = () => {
  let swiper = null;

  const initSlider = () => {
    if (desk.matches) {
      if (swiper === null) {
        swiper = new Swiper('.about__slider', {
          modules: [Autoplay, Pagination, Navigation],
          loop: true,
          observer: true,
          slidesPerView: '1',
          watchSlidesProgress: true,
          resizeObserver: true,
          updateOnWindowResize: true,
          spaceBetween: 0,
          centeredSlides: true,

          navigation: {
            prevEl: '.about__btn--prev',
            nextEl: '.about__btn--next',
          },

          pagination: {
            el: '.about__pag',
            clickable: true,
            bulletClass: 'about__bullet',
            bulletActiveClass: 'about__bullet--active',
          },

          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },

          breakpoints: {
            1920: {
              slidesPerView: 'auto',
            },
          },
        });
      }
    } else {
      if (swiper !== null) {
        swiper.destroy(true, true);
        swiper = null;
      }
    }
  };

  initSlider();
  desk.addEventListener('change', initSlider);
};

export {initAbout};
