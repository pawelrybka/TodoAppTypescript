const buttonSwitch: HTMLElement = document.querySelector("#switch")
const list: HTMLElement = document.querySelector(".tasks")
const inputElement: HTMLInputElement = document.querySelector("#input")

interface Task {
  name: string
  done: boolean
  category?: string
}

const categories: string[] = ["general", "work", "gym", "hobby"]

const tasks: Task[] = [
  {
    name: "Wyrzucić śmieci",
    done: false,
  },
  {
    name: "Nakarmić koty",
    done: false,
    category: "gym"
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
    if(task.category){
      newTask.classList.add(task.category)
    }
    const labelElement: HTMLLabelElement = document.createElement("label")
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id)
    
    const checkBox: HTMLInputElement = document.createElement("input")
    checkBox.type = 'checkbox'
    checkBox.id = id
    checkBox.checked = task.done
    checkBox.addEventListener("change", () => {
      task.done = !task.done
    })

    newTask.appendChild(labelElement)
    newTask.appendChild(checkBox)
  
    list.appendChild(newTask)
  })
}

const addTask = (task: Task) => {
  tasks.push(task)
}

buttonSwitch.addEventListener("click", (e) => {
  e.preventDefault()
  addTask({ name: inputElement.value, done: false })
  render()
})

render()



