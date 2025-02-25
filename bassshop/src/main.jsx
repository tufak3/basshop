import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar.jsx'
import NavbarBottom from './navbarbottom.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Navbar/>
    <NavbarBottom/>
    <App/>
  </StrictMode>,
)
