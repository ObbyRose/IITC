// Variables
const addButton = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Event listener to add a task
addButton.addEventListener("click", addTask);

// Task array to hold todos
let tasks = [];

// Add Task
function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText === "") return; // Prevent empty task

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    renderTasks();
    todoInput.value = ""; // Clear the input
}

// Render the list of tasks
function renderTasks() {
    todoList.innerHTML = ""; // Clear the list

    tasks.forEach(task => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.text;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");
        editButton.addEventListener("click", () => editTask(task.id));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(task.id));

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}

// Edit Task
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const newTaskText = prompt("Edit task:", task.text);

    if (newTaskText) {
        task.text = newTaskText.trim();
        renderTasks();
    }
}

// Delete Task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
