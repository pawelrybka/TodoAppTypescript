import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Content from './components/content/Content'
import TodoList from './components/TodoList/TodoList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Content>
    <TodoList />
  </Content>
)

