import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/light-dark-mode/style.css'
import './components/custom-modal-popup/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
