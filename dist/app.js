const buttonSwitch = document.querySelector("#switch");
const list = document.querySelector(".tasks");
const inputElement = document.querySelector("#input");
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false,
    },
    {
        name: "Nakarmić koty",
        done: false,
    },
    {
        name: "Zrobić bica",
        done: false,
    },
];
const render = () => {
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        const newTask = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkBox = document.createElement("input");
        checkBox.type = 'checkbox';
        checkBox.name = task.name;
        checkBox.id = id;
        checkBox.checked = task.done;
        checkBox.addEventListener("change", () => {
            task.done = !task.done;
        });
        newTask.appendChild(labelElement);
        newTask.appendChild(checkBox);
        list.appendChild(newTask);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
buttonSwitch.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({ name: inputElement.value, done: false });
    render();
});
addTask({ name: "Napierdolić sie jak księciuniu", done: true });
render();
console.log("srakowisko");
