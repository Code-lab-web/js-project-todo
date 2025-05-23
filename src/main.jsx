import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.jsx'
import { Todo } from './todo.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
