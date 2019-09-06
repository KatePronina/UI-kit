import Form from './Form';

$(document).ready(() => {
  const $forms = $('.js-form');

  $forms.each((index, item) => {
    new Form($(item));
  });
});
