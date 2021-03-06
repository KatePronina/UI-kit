import 'jquery-ui/ui/widgets/slider';
import 'src/components/vendor/jquery-ui-slider-pips';

class Slider {
  constructor(sliderElement) {
    this.$sliderElement = sliderElement;
    if (sliderElement.hasClass('slider-range_type_flowing')) {
      this.initFlowing();
    }
    if (sliderElement.hasClass('slider-range_type_steps')) {
      this.initSteps();
    }
  }

  initFlowing() {
    this.$hint = this.$sliderElement.find('.js-slider-range__value');
    this.$sliderElement
      .slider({
        min: 0,
        max: 100,
        value: this.$sliderElement.data('value'),
        create: () => {
          const val = this.$sliderElement.slider('value');
          this.$hint.html(val).css('left', `${val}%`);
        },
        slide: (event, ui) => {
          this.$hint.html(ui.value).css('left', `${ui.value}%`).attr('data-value', `${ui.value}`);
        },
      });
  }

  initSteps() {
    this.$sliderElement
      .slider({
        range: 'min',
        min: 0,
        max: 100,
        value: this.$sliderElement.data('value'),
        step: this.$sliderElement.data('step'),
      })
      .slider('pips', {
        rest: 'label',
      });
  }
}

export default Slider;
