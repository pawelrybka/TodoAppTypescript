import { v4 as uuidV4 } from 'uuid'

type Task = {
  id: string,
  title: string,
  completed: boolean,
  createAt: Date
}

const form = document.querySelector("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const list = document.querySelector("#list")
const tasks: Task[] = loadTask()
tasks.forEach(addListItem)


form?.addEventListener("submit", (e) => {
  e.preventDefault()

  if(input?.value =='' || input?.value == null) return

  const task: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createAt: new Date()
  }
  tasks.push(task)

  addListItem(task)
})

function addListItem(task: Task) {
  const element = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    saveTasks()
  })
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  element.append(label)
  list?.append(element)
} 

function saveTasks(){
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTask(): Task[] {
  const taskJSON = localStorage.getItem("TASKS")
  if(taskJSON == null ) return []
  return JSON.parse(taskJSON)
}

const numbers = [2, 5, 7, 10, 34, 16, 879, 1]

const newNumbers = (arr: number[]) => {
  const pairNumbers: number[] = []
  arr.forEach((element) => {
    if(element % 2 == 0) {
      pairNumbers.push(element)
    } else return
  })
  return pairNumbers
}

var a = "a = zakres globalny"
let b = "a = zakres globalny"
const c = "a = zakres globalny"

{
  var a = "a = zakres lokalny"
  let b = "a = zakres lokalny"
  const c = "a = zakres lokalny"
  console.log(a)
  console.log(b)
  console.log(c)
}

console.log(a)
console.log(b)
console.log(c)


// Lokalny
// Lokalny
// Lokalny
// Lokalny
// Globalny
// Globalny