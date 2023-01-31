import React from 'react'
import styles from './TodoList.module.css'
import TodoForm from '../TodoForm/TodoForm'


const TodoList = () => {
  return (
    <div className={styles.todolist}>
        <TodoForm/>
        <ul>    
            <li>fdsfsdf</li>
            <li>sdfsdfsd</li>
            <li>sdfsdfsd</li>
        </ul>
    </div>
  )
}

export default TodoList


