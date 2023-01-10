const taskList: HTMLElement = document.querySelector(".tasks")
const inputElement: HTMLInputElement = document.querySelector("input")
const buttonElement: HTMLElement = document.querySelector("#switch")
const categoriesContainer: HTMLElement = document.querySelector(".categories")

type Category = "general" | "gym" | "hobby"

interface Task {
  name: string
  done: boolean
  category?: string
}

const categories: string[] = ["general", "gym", "work"]

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
    category: "work"
  }
]

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li")
    
    const categoryInput: HTMLInputElement = document.createElement("input")
    categoryInput.type= "radio"
    
    const categoryLabel: HTMLLabelElement = document.createElement("label")
    categoryLabel.innerText = category
    
    categoryElement.appendChild(categoryInput)
    categoryElement.appendChild(categoryLabel)
    categoriesContainer.appendChild(categoryElement)
  })
}

const render = () => {
  taskList.innerHTML = ''
  tasks.forEach((task, index) => {
    
    const newTask: HTMLElement = document.createElement("li")
    const id: string = `task-${index}`
    if(task.category){
      newTask.classList.add(task.category)
    }
    
    const labelElement: HTMLElement = document.createElement("label")
    labelElement.innerText = task.name
    labelElement.setAttribute("for", id)
  
    const inputElement: HTMLInputElement = document.createElement("input")
    inputElement.type="checkbox"
    inputElement.id = id
    inputElement.checked = task.done

    newTask.appendChild(labelElement)
    newTask.appendChild(inputElement)
    taskList.appendChild(newTask)
  })
}

const addTask = (task: Task) => {
  tasks.push(task)
}

buttonElement.addEventListener("click", (e) => {
  
  if(inputElement.value === ''){
    return
  } else
  e.preventDefault()
  addTask({ name: inputElement.value, done: false, })
  render()
})

renderCategories()
render()
