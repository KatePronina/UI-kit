const buttons = document.querySelectorAll('.main-btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createRipple);
}

function createRipple (e) {
    if (this.getElementsByClassName('main-btn_ripple').length > 0) {
      this.removeChild(this.childNodes[1]);
    }

    const circle = document.createElement('div');
    circle.classList.add('main-btn_ripple');
    this.appendChild(circle);

    const d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

    const rect = this.getBoundingClientRect();

    circle.style.left = e.clientX - rect.left - d/2 + 'px';
    circle.style.top = e.clientY - rect.top - d/2 + 'px';
}