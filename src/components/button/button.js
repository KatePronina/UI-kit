$(() => {
  const buttons = document.querySelectorAll('.main-btn');

  for (let i = 0; i < buttons.length; i++) {
    new Button(buttons[i]);
  }
});

class Button {
  constructor(buttonElement) {
    this.buttonElement = buttonElement;
    this.init();
  }

  init() {
    this.buttonElement.addEventListener('click', this.onButtonClick)
  }

  onButtonClick = (event) => {
    if (this.buttonElement.getElementsByClassName('main-btn_ripple').length > 0) {
      this.buttonElement.removeChild(this.buttonElement.childNodes[1]);
    }

    const circle = document.createElement('div');
    circle.classList.add('main-btn_ripple');
    this.buttonElement.appendChild(circle);

    const d = Math.max(this.buttonElement.clientWidth, this.buttonElement.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

    const rect = this.buttonElement.getBoundingClientRect();

    circle.style.left = event.clientX - rect.left - d/2 + 'px';
    circle.style.top = event.clientY - rect.top - d/2 + 'px';
  }
}



// function createRipple (e) {
    // if (this.getElementsByClassName('main-btn_ripple').length > 0) {
    //   this.removeChild(this.childNodes[1]);
    // }

    // const circle = document.createElement('div');
    // circle.classList.add('main-btn_ripple');
    // this.appendChild(circle);

    // const d = Math.max(this.clientWidth, this.clientHeight);

    // circle.style.width = circle.style.height = d + 'px';

    // const rect = this.getBoundingClientRect();

    // circle.style.left = e.clientX - rect.left - d/2 + 'px';
    // circle.style.top = e.clientY - rect.top - d/2 + 'px';
// }