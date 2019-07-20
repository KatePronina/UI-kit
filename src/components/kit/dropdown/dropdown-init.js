import Dropdown from './Dropdown';

$(document).ready(() => {
  const $dropdowns = $('.dropdown');

  $dropdowns.each((index, item) => {
    new Dropdown($(item));
  });
});
