const tasksContainerElement = document.querySelector(".tasks");
const inputElement = document.querySelector("#input");
const buttonSwitch = document.querySelector('#switch');
const tasks = ["Wyrzucić śmieci", "Pójść na siłkę", "Nakarmić koty"];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
// const newTask = (task: string) => {
//   tasks.push(task)
// }
buttonSwitch.addEventListener("click", (event) => {
    event.preventDefault();
    tasks.push(inputElement.value);
    render();
});
render();
