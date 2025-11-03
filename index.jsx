import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>gamedev — test page</h1>
      <p>If you see this page, the app mounted correctly.</p>
      <p>Replace this file with your real game entry or merge your game code back in once deployment works.</p>
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
