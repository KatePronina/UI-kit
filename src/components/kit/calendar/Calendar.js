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
      onSelect: () => {
        const currentDate = this.$calendarPick.datepicker('getDate');
        this.$calendarDay.attr('value', $.datepicker.formatDate('dd-mm-yy', currentDate));
      },
    });

    const currentDate = this.$calendarPick.datepicker('getDate');
    this.$calendarDay.attr('value', $.datepicker.formatDate('dd-mm-yy', currentDate));

    this.$calendarBtn.click(() => {
      this.$calendarDay.val($.datepicker.formatDate('d', currentDate))
        .attr('value', $.datepicker.formatDate('dd-mm-yy', currentDate));
    });
  }
}

export default Calendar;
