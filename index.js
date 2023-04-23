const taskInput = document.getElementById("task-input");
const enterTask = document.querySelector(".enter-task");
const tasks = document.querySelector(".list");

enterTask.addEventListener("click", function () {
  const newTask = taskInput.value;
  if (newTask) {
    const li = document.createElement("li");
    li.textContent = newTask;
    tasks.appendChild(li);
    taskInput.value = "";
  }
});
