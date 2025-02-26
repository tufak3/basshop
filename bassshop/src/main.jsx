import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Navbar from './components/navbar.jsx'
import NavbarBottom from './components/navbarbottom.jsx'
import App from './components/App.jsx'
import Footer from './components/footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <NavbarBottom/>
    <App/>
    <Footer/>
  </StrictMode>,
)
