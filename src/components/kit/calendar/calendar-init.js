import Calendar from './Calendar';

$(document).ready(() => {
  const $calendars = $('.js-calendar');

  $calendars.each((index, item) => {
    new Calendar($(item));
  });
});
