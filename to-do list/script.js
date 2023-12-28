
function addTask() {
    const taskText = document.getElementById("inputbx").value;
    if (taskText.trim() === "") return;

    const taskList = document.getElementById("list");
    const li = document.createElement("li");


    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    
    const taskTextElement = document.createElement("div");
    taskTextElement.className = "task-text";
    taskTextElement.textContent = taskText;

    
    taskTextElement.addEventListener("click", function () {
        this.classList.toggle("completed-task");
    });

    
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        deleteTask(this);
    });

    
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    
    li.appendChild(taskItem);
    taskList.appendChild(li);


    document.getElementById("inputbx").value = "";
}


function deleteTask(btn) {
    const taskList = document.getElementById("list");
    taskList.removeChild(btn.parentElement.parentElement);
}


document.getElementById("inputbx").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
