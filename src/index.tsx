import React from 'react'
import ReactDOM from 'react-dom/client'
import { Content } from './Content'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
)
