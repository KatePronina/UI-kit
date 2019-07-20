import Form from './Form';

$(document).ready(() => {
  const $forms = $('.form');

  $forms.each((index, item) => {
    new Form($(item));
  });
});
