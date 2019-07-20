import Slider from './Slider';

$(document).ready(() => {
  const $sliders = $('.slider-range');

  $sliders.each((index, item) => {
    new Slider($(item));
  });
});
