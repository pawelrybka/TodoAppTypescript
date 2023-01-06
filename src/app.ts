const tasksContainerElement: HTMLElement = document.querySelector(".tasks")
const inputElement: HTMLInputElement = document.querySelector("#input")
const buttonSwitch: HTMLElement = document.querySelector('#switch')

const tasks = ["Wyrzucić śmieci", "Pójść na siłkę", "Nakarmić koty"]

const render = () => {
  tasksContainerElement.innerHTML = '';
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task;
    tasksContainerElement.appendChild(taskElement)
  })
}

// const newTask = (task: string) => {
//   tasks.push(task)
// }

buttonSwitch.addEventListener("click", (event: Event) => {
  event.preventDefault()
  tasks.push(inputElement.value)
  render()
})

render()


