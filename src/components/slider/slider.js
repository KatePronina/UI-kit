/* eslint-disable no-unused-vars */
$(document).ready(function(){
    $('#slider').slider({
        value : $('.slider-range__value').attr('data-value'),
        min : 0,
        max : 100,
        step : 1,
        create: function(event, ui) {
            let val = $('#slider').slider('value');
            $('.slider-range__value').html(val).css('left', `${val}%`);
        },
        slide: function(event, ui) {
            $('.slider-range__value').html(ui.value).css('left', `${ui.value}%`).attr('data-value', `${ui.value}`);
        }
    });
});

