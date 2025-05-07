import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import './animation.scss'
import "./pages/pagestyle.scss"
import "./pages/mediapages.scss"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
