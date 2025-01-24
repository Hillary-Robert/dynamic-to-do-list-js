document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    let taskText = taskInput.value.trim();

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
    });

    listItem.appendChild(removalBtn);
    taskList.appendChild(listItem);
    taskInput.value = "";
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
