function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");
        listItem.innerText = taskText;
        listItem.addEventListener("click", function () {
            toggleTaskCompletion(this);
        });
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function (e) {
            e.stopPropagation();
            deleteTask(this.parentElement);
        });
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}
function toggleTaskCompletion(listItem) {
    if (!listItem.classList.contains("completed")) {
        listItem.classList.add("completed");
        const completedList = document.getElementById("completed");
        completedList.appendChild(listItem);
    } else {
        listItem.classList.remove("completed");
        const taskList = document.getElementById("taskList");
        taskList.appendChild(listItem);
    }
}
function deleteTask(listItem) {
    listItem.remove();
}