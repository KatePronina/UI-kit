import Map from './Map';

$(document).ready(() => {
  const $maps = $('.map');

  $maps.each((index, item) => {
    new Map($(item));
  });
});
