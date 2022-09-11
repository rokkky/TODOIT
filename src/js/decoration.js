const $nameLabel = document.getElementById('userFormInputLabel');
const $nameInput = document.getElementById('userFormInput');

document.addEventListener('focus', inputOnFocus, true);
document.addEventListener('blur', inputOnBlur, true);

function inputOnFocus(e) {
    if (e.target == $nameInput) {
        $nameLabel.classList.add('user-form__input-label_active');
    }
}

function inputOnBlur(e) {
    if (e.target == $nameInput) {
        if (e.target.value) {
            $nameLabel.classList.remove('user-form__input-label_active');
            $nameLabel.style.opacity = '0'
        } else {
            $nameLabel.classList.remove('user-form__input-label_active');
            $nameLabel.style.opacity = '1'
        }
    }
}

function emptyList(list) {
    if (!list.innerHTML) {
        list.innerHTML = '<p class="empty-list">You have no tasks</p>'
    }
}