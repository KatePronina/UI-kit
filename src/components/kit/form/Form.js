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
    this.$emailInput.on('input', this.debounce(this.handleEmailInput, 1000));
    this.$nameInput.on('input', this.debounce(this.handleNameInput, 1000));
  }

  handleEmailInput = (event) => {
    if (this.checkInputValue(event.target.value, this.emailRegExp)) {
      this.$emailWarning.css('display', 'block').text('Thanks!').removeClass('form__warning_error');
    } else {
      this.$emailWarning.css('display', 'block').text('Error').addClass('form__warning_error');
    }
  }

  handleNameInput = (event) => {
    if (this.checkInputValue(event.target.value, this.nameRegExp)) {
      this.$nameWarning.css('display', 'block').text('Thanks!').removeClass('form__warning_error');
    } else {
      this.$nameWarning.css('display', 'block').text('Error').addClass('form__warning_error');
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
