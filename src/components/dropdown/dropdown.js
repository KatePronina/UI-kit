$(document).ready(function() {
  const $dropdowns = $('.dropdown');

  $dropdowns.each((index, item) => {
    new Dropdown($(item));
  });
})

class Dropdown {
  constructor(dropdownWrapper) {
    this.$dropdownWrapper = dropdownWrapper;
    this.$select = dropdownWrapper.find('.dropdown__select');
    this.init();
  }

  init() {
    this.$select.selectmenu({
      appendTo: this.$dropdownWrapper
    });
  }
}

