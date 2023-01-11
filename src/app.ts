import { Task, Category } from './types/types'
import { render } from './helpers/render-task-helper.js'
import { renderCategories  } from './helpers/render-categories-helper.js'

const taskList: HTMLElement = document.querySelector(".tasks")
const inputElement: HTMLInputElement = document.querySelector("input")
const buttonElement: HTMLElement = document.querySelector("#switch")
const categoriesContainer: HTMLElement = document.querySelector(".categories")

let selectedCategory: Category;

const categories: Category[] = ["general", "gym", "hobby"]

const tasks: Task[] = [
  
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
]
 
const addTask = (task: Task) => {
  tasks.push(task)
}

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
}
buttonElement.addEventListener("click", (e) => {
  e.preventDefault()
  addTask({
    name: inputElement.value,
    done: false,
    category: selectedCategory,
  })
  render(tasks, taskList)
})

renderCategories(
  categories, 
  categoriesContainer, 
  updateSelectedCategory
)

render(tasks, taskList)

