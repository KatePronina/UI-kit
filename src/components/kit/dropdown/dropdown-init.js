import Dropdown from './Dropdown';

$(document).ready(() => {
  const $dropdowns = $('.js-dropdown');

  $dropdowns.each((index, item) => {
    new Dropdown($(item));
  });
});
