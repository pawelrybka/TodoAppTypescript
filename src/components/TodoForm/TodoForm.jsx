import React, { useState } from 'react'
import styles from './TodoForm.module.css'

const TodoForm = (props) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput('')
  };
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Task...' 
          value={input} 
          onChange={handleChange}
        /> 
        <button>Submit</button>
    </form>
  )
}

export default TodoForm

