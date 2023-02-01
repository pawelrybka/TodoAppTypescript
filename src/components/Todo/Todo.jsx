import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import styles from './Todo.module.css'


const Todo = ({ todos, completeTodo }) => {
    const[edit, setEdit] = useState({
        id: null,
        value: ''
    })
  
    return todos.map((todo, index) => (
        <div
            className={styles.todo}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine size={30}/>
                <TiEdit size={30}/>
            </div>
        </div>
           
      
    ))
}

export default Todo


