/* eslint-disable no-unused-vars */
import './jquery-ui-slider-pips';

$(document).ready(function() {
    $('.slider-range').each(function() {
        $('.slider_flowing')
            .slider({
                min: 0,
                max: 100,
                value: $('.slider_flowing').data('value'),
                create: function(event, ui) {
                    let val = $('.slider_flowing').slider('value');
                    $('.slider-range__value').html(val).css('left', `${val}%`);
                },
                slide: function(event, ui) {
                    $('.slider-range__value').html(ui.value).css('left', `${ui.value}%`).attr('data-value', `${ui.value}`);
                }          
            });

        $('.slider_steps')
            .slider({           
                min: 0,
                max: 100,
                value: $('.slider_steps').data('value'),
                step: $('.slider_steps').data('step')
            })
            .slider("pips", {
                rest: "label"              
            });
    })
});