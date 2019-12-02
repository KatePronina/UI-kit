import 'jquery-ui/ui/widgets/selectmenu';

class Dropdown {
  constructor(dropdownWrapper) {
    this.init(dropdownWrapper);
  }

  init(dropdownWrapper) {
    this.$dropdownWrapper = dropdownWrapper;
    this.$select = dropdownWrapper.find('.js-dropdown__select');

    this.$select.selectmenu({
      appendTo: this.$dropdownWrapper,
    });
  }
}

export default Dropdown;
