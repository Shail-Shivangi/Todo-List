import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import { Todo } from './components/todo.jsx'
import { Todoform } from './components/todoform.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo/>
  </StrictMode>
)
