document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach(function (taskText) {
      addTask(taskText, false);
    });
  }

  function saveTasks() {
    const tasks = Array.from(taskList.children).map(function (item) {
      return item.firstChild.textContent;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask(taskText = taskInput.value.trim(), save = true) {
    if (taskText === "") {
      alert("Enter a task");
      return;
    }

    let listItem = document.createElement("li");
    listItem.textContent = taskText;

    let removalBtn = document.createElement("button");
    removalBtn.classList.add("remove-btn");
    removalBtn.textContent = "Remove";

    removalBtn.addEventListener("click", function () {
      listItem.remove();
      saveTasks();
    });

    listItem.appendChild(removalBtn);
    taskList.appendChild(listItem);

    if (save) {
      saveTasks();
    }

    taskInput.value = "";
  }

  addButton.addEventListener("click", function () {
    addTask();
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  loadTasks();
});
