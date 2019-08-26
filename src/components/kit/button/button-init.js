import Button from './Button';

$(() => {
  const buttons = document.querySelectorAll('.main-btn');

  buttons.forEach((button) => {
    new Button(button);
  });
});
