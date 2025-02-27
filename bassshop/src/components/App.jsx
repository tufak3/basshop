import '../styles/App.css'

import {LeftSection,MiddleSection,RightSection} from '../constats/appconst'
function App() {
  return (
    <>
      <div className='main-container-wrapper'>
        <div className='main-container'>
          <div className='main-container-left'>
            {LeftSection.map((section,index) => (
              <div className='left' key={index}>
                <p className='main-container-text' dangerouslySetInnerHTML={{ __html: section.title }} />
                <img src={section.image} alt={section.alt} className={section.className} style={section.style} />
              </div>
            ))}
          </div>

          <div className='main-container-middle'>
            {MiddleSection.map((section,index) => (
              <div className='middle' key={index}>
                <p className='main-container-text' dangerouslySetInnerHTML={{ __html: section.title }} />
                <img src={section.image} alt={section.alt} className={section.className} style={section.style} />
              </div>
            ))}
          </div>
          <div className='main-container-right'>
            {RightSection.map((section,index) => (
              <div className='right' key={index}>
                <img src={section.image} alt={section.alt} className={section.className} style={section.style} />
                <p className='main-container-scissors-text' dangerouslySetInnerHTML={{ __html: section.title }} />
                <p className='scissors-text' dangerouslySetInnerHTML={{ __html: section.text }} />
              </div>
            ))}
          </div>
        </div>
        </div>
    </>
  )
}

export default App
