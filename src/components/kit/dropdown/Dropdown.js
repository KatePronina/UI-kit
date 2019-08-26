import 'jquery-ui/ui/widgets/selectmenu';

class Dropdown {
  constructor(dropdownWrapper) {
    this.$dropdownWrapper = dropdownWrapper;
    this.$select = dropdownWrapper.find('.dropdown__select');
    this.init();
  }

  init() {
    this.$select.selectmenu({
      appendTo: this.$dropdownWrapper,
    });
  }
}

export default Dropdown;
