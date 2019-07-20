import Calendar from './Calendar';

$(document).ready(() => {
  const $calendars = $('.calendar');

  $calendars.each((index, item) => {
    new Calendar($(item));
  });
});
