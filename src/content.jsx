import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'

const root = document.createElement('div')
root.id = 'crx-root';

document.body.append(root)

ReactDOM.createRoot(root).render(
  <>
    <App />
  </>
  
)