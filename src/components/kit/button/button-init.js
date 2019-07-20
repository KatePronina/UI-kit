import Button from './Button';

$(() => {
  const buttons = document.querySelectorAll('.main-btn');

  for (let i = 0; i < buttons.length; i += 1) {
    new Button(buttons[i]);
  }
});
