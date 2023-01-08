const buttonSwitch: HTMLElement = document.querySelector("#switch")
const list: HTMLElement = document.querySelector(".tasks")
const inputElement: HTMLInputElement = document.querySelector("#input")

const tasks: {
  name: string;
  done: boolean;
}[] = [
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
]
  
const render = () => { 
  list.innerHTML = ''
  tasks.forEach((task, index) => {
    
    const newTask: HTMLElement = document.createElement("li");
    const id: string = `task-${index}`
    
    const labelElement: HTMLLabelElement = document.createElement("label")
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id)
    
    const checkBox: HTMLInputElement = document.createElement("input")
    checkBox.type = 'checkbox'
    checkBox.name = task.name
    checkBox.id = id
    checkBox.checked = task.done
    
    newTask.appendChild(labelElement)
    newTask.appendChild(checkBox)
  
    list.appendChild(newTask)
  })
}

const addTask = (task: { name: string; done: boolean }) => {
  tasks.push(task)
}

buttonSwitch.addEventListener("click", (e) => {
  e.preventDefault()
  addTask({ name: inputElement.value, done: true })
  render()
})

addTask({ name: "Napierdolić sie jak księciuniu", done: true })
render()


