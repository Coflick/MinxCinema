// Array to store tasks (each task is an object)
let tasks = [
  { id: 1, title: "Code project", completed: false },
  { id: 2, title: "Do homework", completed: false },
];

// DOM elements
const taskForm = document.getElementById("new-task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Display all tasks
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    if (task.completed) {
      taskItem.classList.add("completed");
    }

    taskItem.innerHTML = `
            <span>${task.title}</span>
            <div class="task-actions">
                <button onclick="toggleTask(${task.id})">Toggle</button>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

    taskList.appendChild(taskItem);
  });
}

// Add a new task
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTaskTitle = taskInput.value.trim();
  if (newTaskTitle) {
    const newTask = {
      id: Date.now(), // Simple unique ID
      title: newTaskTitle,
      completed: false,
    };

    tasks.push(newTask);
    renderTasks();
    taskInput.value = "";
  }
});

// Toggle task completion status
function toggleTask(taskId) {
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

// Edit a task
function editTask(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;

  const newTitle = prompt("Edit task:", task.title);
  if (newTitle && newTitle.trim() !== "") {
    task.title = newTitle.trim();
    renderTasks();
  }
}

// Delete a task
function deleteTask(taskId) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks = tasks.filter((task) => task.id !== taskId);
    renderTasks();
  }
}

// Initial render
renderTasks();
