import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div style={{fontFamily:'sans-serif',padding:20}}>
      <h1>gamedev — test page</h1>
      <p>If you see this, the app mounted correctly.</p>
    </div>
  )
}

const rootEl = document.getElementById('root') || (() => {
  const el = document.createElement('div')
  el.id = 'root'
  document.body.appendChild(el)
  return el
})()

createRoot(rootEl).render(<App />)
