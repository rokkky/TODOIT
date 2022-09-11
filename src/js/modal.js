const $nameButton = document.getElementById('userFormButton');
const $userNameHeader = document.getElementById('userNameHeader');
const $modal = document.getElementById('modal');
let List;

document.addEventListener('click', submitUser);
document.getElementById('headerProfile').addEventListener('click', changeUser)

function submitUser (e) {
    e.preventDefault();
    if (e.target == $nameButton && $nameInput.value) {
        e.preventDefault();
        USER_NAME = $nameInput.value;
        $userNameHeader.textContent = USER_NAME;
        $modal.classList.add('hidden');
        document.removeEventListener('click', ListEvent);
        List = new TaskList;
        document.addEventListener('click', ListEvent);
    }
}

function changeUser(e) {
    if ($userNameHeader.innerHTML) {
        $modal.classList.remove('hidden');
        $nameInput.value = USER_NAME;
    }
}
