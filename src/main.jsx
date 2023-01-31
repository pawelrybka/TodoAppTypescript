import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TodoForm from './components/TodoForm/TodoForm'
import Content from './components/content/Content'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Content>
    <TodoForm />
  </Content>
)

