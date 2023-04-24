const taskInput = document.getElementById("task-input");
const enterTask = document.querySelector(".enter-task");
const tasks = document.querySelector(".list");
const deleteButton = document.querySelector(".delete");

enterTask.addEventListener("click", function () {
  const newTask = taskInput.value;
  if (newTask) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    li.classList.add("task");
    li.textContent = newTask;
    deleteBtn.textContent = `X`;
    tasks.appendChild(li);
    li.appendChild(deleteBtn);
    taskInput.value = "";
  }
});

tasks.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    const taskItem = event.target.parentNode;
    tasks.removeChild(taskItem);
  }
});
