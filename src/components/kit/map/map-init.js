import Map from './Map';

$(document).ready(() => {
  const $maps = $('.js-map');

  $maps.each((index, item) => {
    new Map($(item));
  });
});
