import React, { useState } from 'react'
import styles from './TodoList.module.css'
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo'

const TodoList = () => {
  
  const[todos, setTodos] = useState([])

  const addTodo = todo => {
    const newTodos= [todo, ...todos]

    setTodos(newTodos)
    
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }
 
  return (
    <div className={styles.todolist}>
      <h1>What is the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} />
    </div>
  )
}

export default TodoList



