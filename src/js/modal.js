const $nameLabel = document.getElementById('userFormInputLabel');
const $nameInput = document.getElementById('userFormInput');
const $nameButton = document.getElementById('userFormButton');
const $userNameHeader = document.getElementById('userNameHeader');
const $modal = document.getElementById('modal');
let List;

document.addEventListener('focus', inputOnFocus, true);
document.addEventListener('blur', inputOnBlur, true);
document.addEventListener('click', submitUser)

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

function submitUser (e) {
    if (e.target == $nameButton && $nameInput.value) {
        e.preventDefault();
        USER_NAME = $nameInput.value;
        $userNameHeader.textContent = USER_NAME;
        $modal.classList.add('hidden');
        List = new TaskList;
    }
}