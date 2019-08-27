import 'jquery-ui/ui/widgets/datepicker';

class Calendar {
  constructor(calendarElement) {
    this.$calendarElement = calendarElement;
    this.$calendarPick = calendarElement.find('.calendar__pick');
    this.$calendarDay = calendarElement.find('.calendar__day');
    this.$calendarBtn = calendarElement.find('.calendar__btn');

    this.init();
  }

  init() {
    this.$calendarPick.datepicker({
      firstDay: 1,
      dayNamesMin: ['San', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      altField: this.$calendarDay,
      altFormat: 'd',
      showOtherMonths: true,
      onSelect: this.onDaySelect,
    });

    this.setStartDate();
    this.$calendarBtn.click(this.onCalendarBtnClick);
  }

  onCalendarBtnClick = () => {
    this.$calendarDay.val($.datepicker.formatDate('d', this.currentDate))
      .attr('value', $.datepicker.formatDate('dd-mm-yy', this.currentDate));
  }

  onDaySelect = () => {
    const currentDate = this.$calendarPick.datepicker('getDate');
    this.$calendarDay.attr('value', $.datepicker.formatDate('dd-mm-yy', currentDate));
  }

  setStartDate = () => {
    this.currentDate = this.$calendarPick.datepicker('getDate');
    this.$calendarDay.attr('value', $.datepicker.formatDate('dd-mm-yy', this.currentDate));
  }
}

export default Calendar;
