const $nameLabel = document.getElementById('user-form__input-label');
const $nameInput = document.getElementById('user-form__input');

document.addEventListener('focus', inputOnFocus, true);
document.addEventListener('blur', inputOnBlur, true);

function inputOnFocus(e) {
    if (e.target == $nameInput) {
        e.target.style.borderWidth = '2px';
        $nameLabel.classList.add('user-form__input-label_active');
        $nameInput.style.border = '2px solid $colorPrimary;'
    }
}

function inputOnBlur(e) {
    if (e.target == $nameInput) {
        e.target.classList.remove('user-form__input_focus')
        if (e.target.value) {
            $nameLabel.classList.remove('user-form__input-label_active');
            $nameLabel.style.opacity = '0'
        } else {
            $nameLabel.classList.remove('user-form__input-label_active');
            $nameLabel.style.opacity = '1'
        }
    }
}