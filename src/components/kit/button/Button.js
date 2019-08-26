class Button {
  constructor(buttonElement) {
    this.buttonElement = buttonElement;
    this.init();
  }

  init() {
    this.buttonElement.addEventListener('click', this.onButtonClick);
  }

  onButtonClick = (event) => {
    if (this.buttonElement.getElementsByClassName('main-btn_ripple').length > 0) {
      this.buttonElement.removeChild(this.buttonElement.childNodes[1]);
    }

    const circle = document.createElement('div');
    circle.classList.add('main-btn_ripple');
    this.buttonElement.appendChild(circle);

    const diameter = Math.max(this.buttonElement.clientWidth, this.buttonElement.clientHeight);

    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;

    const rect = this.buttonElement.getBoundingClientRect();

    circle.style.left = `${event.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${event.clientY - rect.top - diameter / 2}px`;
  }
}

export default Button;
