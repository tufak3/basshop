import '../styles/App.css'
import {Routes,Route,Link} from 'react-router-dom'
import {LeftSection,MiddleSection,RightSection} from '../constats/appconst'
import Footer from './Footer.jsx'
import BassGuitars from './pages/BassGuitars.jsx'
import ElectroGuitars from './pages/ElectroGuitars.jsx'
import Strings from './pages/Strings.jsx'
import BassStrings from './pages/BassStrings.jsx'
import Pedals from './pages/Pedals.jsx'
import Amp from './pages/Amp.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <div className='main-container-wrapper'>
            <div className='main-container'>
              <div className='main-container-left'>
              {LeftSection.map((section) => (
              <Link to={section.link} style={{ textDecoration: 'none' }} key={section.id}>                
                  <div className='left'>
                      <p className='main-container-text' dangerouslySetInnerHTML={{ __html: section.title }} />
                      <img src={section.image} alt={section.alt} className={section.className} style={section.style} />
                  </div>
                </Link>
              ))}
              </div>
             
              <div className='main-container-middle'>
              {MiddleSection.map((section) => (
              <Link to={section.link} 
                    style={{ textDecoration: 'none' }} 
                    key={section.id}>
                <div className='middle'>
                    <p className='main-container-text' dangerouslySetInnerHTML={{ __html: section.title }} />
                    <img src={section.image} alt={section.alt} className={section.className} style={section.style} />                    
                  </div>
                </Link>
                ))}
              </div>
              <div className='main-container-right'>
                {RightSection.map((section) => (
                  <div className='right' key={section.id}>
                    <img src={section.image} alt={section.alt} className={section.className} style={section.style} />
                    <p className='main-container-scissors-text' dangerouslySetInnerHTML={{ __html: section.title }} />
                    <p className='scissors-text' dangerouslySetInnerHTML={{ __html: section.text }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </>
      }
      />
      <Route path="/bass-guitars" element={<BassGuitars />} />
      <Route path="/electro-guitars" element={<ElectroGuitars />} />
      <Route path="/strings" element={<Strings/>} />
      <Route path="/bass-strings" element={<BassStrings/>} />
      <Route path="/pedals" element={<Pedals/>} />
      <Route path="/amps" element={<Amp/>} />
    </Routes>
  )
}

export default App
