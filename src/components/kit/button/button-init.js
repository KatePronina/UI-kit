import Button from './Button';

$(() => {
  const buttons = document.querySelectorAll('.js-main-btn');

  buttons.forEach((button) => {
    new Button(button);
  });
});
