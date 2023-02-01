import React, { useState } from 'react'
import styles from './TodoList.module.css'
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo'

const TodoList = () => {
  
  const[todos, setTodos] = useState([])

  const addTodo = todo => {
    if (/^\s*$/.test(todo.text)) {
      return;
    }
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
 
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <div className={styles.todolist}>
      <h2>What is the plan for today?</h2>
      <TodoForm onSubmit={addTodo} />
      <Todo 
        todos={todos} 
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default TodoList



