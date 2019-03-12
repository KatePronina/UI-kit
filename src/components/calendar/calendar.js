$(document).ready(function() {
    $('.calendar__pick').datepicker({
        firstDay: 0,
        dayNamesMin: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "San" ],
        altField: '.calendar__day',
        altFormat: 'd',
        showOtherMonths: true,
        onSelect: function() {
            const currentDate = $('.calendar__pick').datepicker('getDate');
            $(".calendar__day").attr('value', $.datepicker.formatDate("dd-mm-yy", currentDate));
        }
    })

    const currentDate = $('.calendar__pick').datepicker('getDate');
    $(".calendar__day").attr('value', $.datepicker.formatDate("dd-mm-yy", currentDate));

    $('.calendar__btn').click(function() {
        $('.calendar__day').val($.datepicker.formatDate("d", currentDate))
                           .attr('value', $.datepicker.formatDate("dd-mm-yy", currentDate));
    })
});