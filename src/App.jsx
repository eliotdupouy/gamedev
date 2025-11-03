import React from 'react'

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>gamedev — test page</h1>
      <p>If you see this page, the app mounted correctly.</p>
      <p>When CI builds and publishes dist, the published index.html will reference built assets (no .jsx requests).</p>
    </div>
  )
}
