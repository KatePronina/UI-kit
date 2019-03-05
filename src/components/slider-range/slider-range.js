/* eslint-disable no-unused-vars */
import './jquery-ui-slider-pips';

$(document).ready(function() {
    $('.slider-range').each(function() {
        $('.slider--flowing')
            .slider({
                min: 0,
                max: 100,
                value: $('.slider--flowing').data('value'),
                create: function(event, ui) {
                    let val = $('.slider--flowing').slider('value');
                    $('.slider-range__value').html(val).css('left', `${val}%`);
                },
                slide: function(event, ui) {
                    $('.slider-range__value').html(ui.value).css('left', `${ui.value}%`).attr('data-value', `${ui.value}`);
                }          
            });

        $('.slider--steps')
            .slider({           
                min: 0,
                max: 100,
                value: $('.slider--steps').data('value'),
                step: $('.slider--steps').data('step')
            })
            .slider("pips", {
                rest: "label"              
            });
    })
});