import React from 'react'
import styles from './TodoForm.module.css'

const TodoForm = () => {
  return (
    <form className={styles.form}>
        <input type="text" placeholder='Task...' />
        <button>Submit</button>
    </form>
  )
}

export default TodoForm

