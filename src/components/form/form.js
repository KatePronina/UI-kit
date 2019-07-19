$(document).ready(function() {
  const $forms = $('.form');

  $forms.each((index, item) => {
    new Form($(item));
  });
})

class Form {
  constructor(formElement) {
    this.$formElement = formElement;
    this.$inputs = formElement.find('.form__input');
    this.init();
  }

  init() {
    this.$inputs.each((index, item) => {
      $(item).on('input', this.onInput);
    })
  }

  onInput = (event) => {
    if (event.target.value) {
      event.target.nextElementSibling.style.display = 'block';
      event.target.nextElementSibling.textContent = 'Thanks!';
      event.target.nextElementSibling.classList.remove('form__warning_error');
    } else {
      event.target.nextElementSibling.style.display = 'block';
      event.target.nextElementSibling.textContent = 'Error';
      event.target.nextElementSibling.classList.add('form__warning_error');
    }
  }
}