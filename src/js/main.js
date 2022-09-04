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