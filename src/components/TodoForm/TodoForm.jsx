import React from 'react'
import styles from './TodoForm.module.css'

const TodoForm = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder='Task...' />
        <button>Submit</button>
    </form>
  )
}

export default TodoForm

