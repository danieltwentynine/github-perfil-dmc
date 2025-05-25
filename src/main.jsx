import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'

// import { PI as numeroPi, GTM_Brasil } from './teste/teste.js'
// import {nomes} from './teste/nomes.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
