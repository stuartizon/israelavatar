import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWorld from './HelloWorld'

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
)
