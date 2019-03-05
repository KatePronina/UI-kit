const inputs = document.querySelectorAll('.form__input');

const inputHandler = (e) => {
    if (e.target.value) {
        e.target.nextElementSibling.style.display = 'block';
        e.target.nextElementSibling.textContent = 'Thanks!';
        e.target.nextElementSibling.classList.remove('form__warning--error');
    } else {
        e.target.nextElementSibling.style.display = 'block';
        e.target.nextElementSibling.textContent = 'Error';
        e.target.nextElementSibling.classList.add('form__warning--error');
    }
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', inputHandler);
}