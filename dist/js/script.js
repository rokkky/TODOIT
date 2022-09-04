/* (function() {
const USER_NAME = prompt('Enter your name');
const URL = 'https://jsfeajax.herokuapp.com/';

window.DataService = {
    sendRequest: sendRequest,
}

async function sendRequest (body, path = '/todo', method = 'POST',) {
    let response = await fetch(URL+USER_NAME+path, {
        method: method,
        headers: {'Content-Type': 'application/json;charset=utf-8'}, 
        body: JSON.stringify(body)
    })
    let data = await response.json();
    return data;
};
})(); */
/* "use strict"
const $taskArea = document.getElementById('taskArea');
const $button = document.getElementById('taskButton');
document.addEventListener('DOMContentLoaded', () => new TaskList);
let i;

class Task { 
	template = document.createElement('li');
	constructor(task) {
		this.text = task.text;
		this.id = task.id;
		this.status = task.status; 
		this.handleTaskEvent(); 
	};

	renderTask() {
		this.template.className = `${this.status}`;
		this.template.id = `${this.id}`;
		this.template.innerHTML = this.text;
		return this.template;
	};

	async updateTaskStatus() {
		this.status = 'complete'; 
		DataService.sendRequest(this);
	};

	deleteTask() {
		DataService.sendRequest(this, '/todo/delete');
		this.template.remove();
	};

	handleTaskEvent() {
		document.addEventListener('click', (e) => this.handleTaskClick(e));
	};

	handleTaskClick(e) {
		if (e.target === this.template) {
			if (this.status === 'new') {
				this.updateTaskStatus();
				this.renderTask();
			} else {
				this.deleteTask();
				this.renderTask();
			}
		}
	};
};

class TaskList { 
	constructor() {
		this.template = document.getElementById('todoList');
		this.listData;
		this.initList();
		this.handleListEvent();
	};

	renderList() {
		this.template.innerHTML = '';
		this.listData.forEach(elem => {
			this.template.append(new Task(elem).renderTask());	
		});
	};

	async initList() {
		this.listData = await DataService.sendRequest(undefined, undefined, 'GET');
		this.renderList();
	};

	async addTask(e) {
		e.preventDefault();
		if (e.target === $button) {
			if (!$taskArea.value.length) {
				document.getElementById('feedback').textContent = 'Enter a task and try again';
			} else {
				this.listData = await DataService.sendRequest({text: $taskArea.value});
				this.renderList();
				$taskArea.value = '';
			}
		}
	};

	handleListEvent() {
		document.addEventListener('click', (e) => this.addTask(e));
	};
}; */
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