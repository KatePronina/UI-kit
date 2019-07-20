class Form {
  constructor(formElement) {
    this.$formElement = formElement;
    this.$inputs = formElement.find('.form__input');
    this.init();
  }

  init() {
    this.$inputs.each((index, item) => {
      $(item).on('input', this.onInput);
    });
  }

  onInput = (event) => {
    const { target } = event;
    if (event.target.value) {
      target.nextElementSibling.style.display = 'block';
      target.nextElementSibling.textContent = 'Thanks!';
      target.nextElementSibling.classList.remove('form__warning_error');
    } else {
      target.nextElementSibling.style.display = 'block';
      target.nextElementSibling.textContent = 'Error';
      target.nextElementSibling.classList.add('form__warning_error');
    }
  }
}

export default Form;
