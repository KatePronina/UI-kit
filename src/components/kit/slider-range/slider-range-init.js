import Slider from './Slider';

$(document).ready(() => {
  const $sliders = $('.js-slider-range');

  $sliders.each((index, item) => {
    new Slider($(item));
  });
});
