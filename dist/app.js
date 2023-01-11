import { render } from './helpers/render-task-helper.js';
import { renderCategories } from './helpers/render-categories-helper.js';
const taskList = document.querySelector(".tasks");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("#switch");
const categoriesContainer = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "gym", "hobby"];
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
        category: "hobby"
    }
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({
        name: inputElement.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, taskList);
});
renderCategories(categories, categoriesContainer, updateSelectedCategory);
render(tasks, taskList);
