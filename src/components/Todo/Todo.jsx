import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import styles from './Todo.module.css'


const Todo = ({ todos, completeTodo, removeTodo }) => {
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
            <div className={styles.icons}>
                <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)}
                    size={30}
                />
                <TiEdit 
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    size={30}/>
            </div>
        </div>
    ))
}

export default Todo


