import Button from './Button';

$(() => {
  const buttons = document.querySelectorAll('.js-main-button');

  buttons.forEach((button) => {
    new Button(button);
  });
});
