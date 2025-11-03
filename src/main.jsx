 url=https://github.com/eliotdupouy/gamedev/blob/main/src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = document.getElementById('root') || (() => {
  const el = document.createElement('div')
  el.id = 'root'
  document.body.appendChild(el)
  return el
})()

createRoot(root).render(<App />)