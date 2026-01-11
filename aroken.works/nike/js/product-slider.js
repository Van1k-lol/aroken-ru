export const productSlider = () => {
  new Swiper('.product__slider', {
    slidesPreView: "auto",
    centeredSlides: true,
    loop: true,
    mouseweel: {
      forceToAxis: true
    },
    navigation: {
      prevEl: '.product__slider-button--left',
      nextEl: '.product__slider-button--right',
    },
  });
};