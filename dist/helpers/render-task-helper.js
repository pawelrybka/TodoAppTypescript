export const render = (tasks, taskList) => {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const newTask = document.createElement("li");
        const id = `task-${index}`;
        if (task.category) {
            newTask.classList.add(task.category);
        }
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        inputElement.id = id;
        inputElement.checked = task.done;
        newTask.appendChild(labelElement);
        newTask.appendChild(inputElement);
        taskList.appendChild(newTask);
    });
};
