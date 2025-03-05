import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavbarBottom from './components/navbarbottom.jsx'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <NavbarBottom/>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
