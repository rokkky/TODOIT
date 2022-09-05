const $taskArea = document.getElementById('taskFormInput');
const $taskButton = document.getElementById('taskFormButton');

class Task { 
	currentTemplate = document.createElement('div');
	checkbox = document.createElement('div');
	taskText = document.createElement('li');
	constructor(task) {
		this.text = task.text;
		this.id = task.id;
		this.status = task.status;
		this.list = List;
		this.taskText.classList.add('task');
		this.checkbox.classList.add('task-checkbox');
		this.currentTemplate.classList.add('task-wrapper');
		this.currentTemplate.append(this.checkbox, this.taskText); 
		this.handleTaskEvent(); 
	};
	renderTask() {
		if(this.status === 'complete' && !this.taskText.classList.contains('task_completed')) {
			this.checkbox.classList.add('task-checkbox_completed');
			this.taskText.classList.add('task_completed'); 
		}
		this.currentTemplate.id = `${this.id}`;
		this.taskText.innerHTML = this.text;
		return this.currentTemplate;
	};

	async updateTaskStatus() {
		this.status = 'complete';
		this.checkbox.classList.add('task-checkbox_completed');
		this.taskText.classList.add('task_completed'); 
		DataService.sendRequest({text: this.text, id: this.id, status: this.status});
		this.currentTemplate.remove();
		this.list.completeTemplate.append(this.currentTemplate);
	};

	deleteTask() {
		DataService.sendRequest({text: this.text, id: this.id, status: this.status}, '/todo/delete');
		this.currentTemplate.remove();
	};

	handleTaskEvent() {
		this.currentTemplate.addEventListener('click', (e) => this.handleTaskClick(e));
	};

	handleTaskClick() {
			if (this.status === 'new') {
				this.updateTaskStatus();
				this.renderTask();
			} else {
				this.deleteTask();
				this.renderTask();
			}
	};
};

class TaskList { 
	constructor() {
		this.currentTemplate = document.getElementById('list_current');
		this.completeTemplate = document.getElementById('list_completed');
		this.listData;
		this.initList();
		this.handleListEvent();
	};

	renderList() {
		this.currentTemplate.innerHTML = '';
		this.completeTemplate.innerHTML = '';
		this.listData.forEach(elem => {
			if (elem.status === 'new') {
				this.currentTemplate.append(new Task(elem).renderTask());
			} else {
				this.completeTemplate.append(new Task(elem).renderTask());
			}
				
		});
	};

	async initList() {
		this.listData = await DataService.sendRequest(undefined, undefined, 'GET');
		this.renderList();
	};

	async addTask(e) {
		e.preventDefault();
		if (e.target === $taskButton) {
			/* if (!$taskArea.value.length) {
				document.getElementById('feedback').textContent = 'Enter a task and try again';
			} */ 
				this.listData = await DataService.sendRequest({text: $taskArea.value});
				this.renderList();
				$taskArea.value = '';
			
		}
	};

	handleListEvent() {
		document.addEventListener('click', (e) => this.addTask(e));
	};
};