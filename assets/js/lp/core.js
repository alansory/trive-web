function scrollToForm() {
  const form = document.querySelector('#form-js');
  const formRect = form.getBoundingClientRect();
  window.scrollTo({
    top: Math.floor(formRect.top + window.pageYOffset) - 30,
    behavior: 'smooth'
  });
}

// Account Types Swiper
new Swiper('.swiper.swiper-account-types', {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  pagination: {
    el: '.swiper.swiper-account-types .swiper-pagination'
  }
});

// Licences Swiper
new Swiper('.swiper.swiper-licences', {
  slidesPerView: 6,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  },
  pagination: {
    el: '.swiper.swiper-licences .swiper-pagination'
  }
});
