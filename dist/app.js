const taskList = document.querySelector(".tasks");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("#switch");
const categoriesContainer = document.querySelector(".categories");
const categories = ["general", "gym", "work"];
const tasks = [
    {
        name: "Pójść na siłownię",
        done: false,
        category: "gym"
    },
    {
        name: "Zrobić zakupy",
        done: false,
        category: "general"
    },
    {
        name: "Napisać kod",
        done: false,
        category: "work"
    }
];
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const categoryInput = document.createElement("input");
        categoryInput.type = "radio";
        categoryInput.name = "category";
        categoryInput.value = category;
        const categoryLabel = document.createElement("label");
        categoryLabel.innerText = category;
        categoryElement.appendChild(categoryInput);
        categoryElement.appendChild(categoryLabel);
        categoriesContainer.appendChild(categoryElement);
    });
};
const render = () => {
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
const addTask = (task) => {
    tasks.push(task);
};
buttonElement.addEventListener("click", (e) => {
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
    const selectedCategory = selectedRadioElement.value;
    if (inputElement.value === '') {
        return;
    }
    else
        e.preventDefault();
    addTask({ name: inputElement.value, done: false, category: selectedCategory });
    render();
});
addTask({ name: "wysrać sie", done: true, category: "gym" });
renderCategories();
render();
