const tasksContainerElement = document.querySelector(".tasks");
const inputElement = document.querySelector("#input");
const buttonSwitch = document.querySelector('#switch');
const tasks = ["Wyrzucić śmieci", "Pójść na siłkę", "Nakarmić koty"];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        if (task === '') {
            return;
        }
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
buttonSwitch.addEventListener("click", (event) => {
    event.preventDefault();
    tasks.push(inputElement.value);
    render();
});
render();
