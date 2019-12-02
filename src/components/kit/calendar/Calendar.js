import 'jquery-ui/ui/widgets/datepicker';

class Calendar {
  constructor(calendarElement) {
    this.findDOMElements(calendarElement);
    this.init();
  }

  findDOMElements(calendarElement) {
    this.$calendarElement = calendarElement;
    this.$calendarPick = calendarElement.find('.js-calendar__pick');
    this.$calendarDay = calendarElement.find('.js-calendar__day');
    this.$calendarButtonSelectToday = calendarElement.find('.js-calendar__button');
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
    this.$calendarButtonSelectToday.click(this.handleCalendarButtonSelectTodayClick);
  }

  handleCalendarButtonSelectTodayClick = () => {
    this.$calendarPick.datepicker('setDate', new Date());
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
