import { Task } from '../types/types'

export const render = (tasks: Task[], taskList: HTMLElement) => {
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