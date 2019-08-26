class Form {
  constructor(formElement) {
    this.$formElement = formElement;
    this.$emailInput = formElement.find('.js-form__input-email');
    this.$nameInput = formElement.find('.js-form__input-name');
    this.$emailWarning = formElement.find('.js-form__warning-email');
    this.$nameWarning = formElement.find('.js-form__warning-name');
    this.emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    this.nameRegExp = /[^0-9_.+]/;
    this.init();
  }

  init() {
    this.$emailInput.on('input', this.debounce(this.onEmailInput, 1000));
    this.$nameInput.on('input', this.debounce(this.onNameInput, 1000));
  }

  onEmailInput = (event) => {
    if (this.checkInputValue(event.target.value, this.emailRegExp)) {
      this.$emailWarning.css('display', 'block');
      this.$emailWarning.text('Thanks!');
      this.$emailWarning.removeClass('form__warning_error');
    } else {
      this.$emailWarning.css('display', 'block');
      this.$emailWarning.text('Error');
      this.$emailWarning.addClass('form__warning_error');
    }
  }

  onNameInput = (event) => {
    if (this.checkInputValue(event.target.value, this.nameRegExp)) {
      this.$nameWarning.css('display', 'block');
      this.$nameWarning.text('Thanks!');
      this.$nameWarning.removeClass('form__warning_error');
    } else {
      this.$nameWarning.css('display', 'block');
      this.$nameWarning.text('Error');
      this.$nameWarning.addClass('form__warning_error');
    }
  }

  checkInputValue = (value, regex) => regex.test(value);

  debounce = function debounce(func, wait, immediate) {
    let timeout;
    return function waitingCheck(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(this, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(this, args);
    };
  };
}

export default Form;
