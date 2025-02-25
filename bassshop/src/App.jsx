import './App.css'
import bass from '/bass.svg'
import strunes from '/strunes.svg'
import amp from '/amp.svg'
import electro from '/electro.svg'
import pedal from '/pedal_test.svg'
import strunesBass from '/strunes_bass.svg'
import scissors from '/scissors.svg'
function App() {
  return (
    <>
      <div className='main-container-wrapper'>
        <div className='main-container'>
          <div className='main-container-left'>
            <div className='left'>
              <p className='main-container-text'>Бас-гитары</p>
              <img src={bass} alt="Бас-гитары" className='main-container-left-img' />
            </div>
            <div className='left' style={{ marginTop: '30px' }}>
              <p className='main-container-text'>Электрогитары</p>
              <img src={electro} alt="Электрогитары" className='main-container-left-img-second' style={{width:'222px'}}/>
            </div>
          </div>

          <div className='main-container-middle'>
            <div className='middle'>
              <p className='main-container-text'>Струны для<br /> электрогитар</p>
              <img src={strunes} alt="Струны для электрогитар" className='main-container-middle-img' style={{ marginTop: '-35px' }} />
            </div>
            <div className='middle'>
              <p className='main-container-text'>Комбики и<br /> усиление</p>
              <img src={amp} alt="комбики и усиление" className='main-container-middle-img' style={{ width: '169px', height: '152px', marginTop: '25px', marginLeft: '100px' }} />
            </div>
            <div className='middle' >
              <p className='main-container-text'>Аксессуары<br />для электрогитар</p>
              <img src={pedal} alt="Струны для электрогитар" className='main-container-middle-img' style={{ marginTop: '-20px', width: '169px', height: '277px' }} />
            </div>
            <div className='middle'>
              <p className='main-container-text'>Струны для<br /> бас-гитар</p>
              <img src={strunesBass} alt="Струны для электрогитар" className='main-container-middle-img' style={{ marginTop: '-24px' }} />
            </div>
          </div>
          <div className='main-container-right'>
            <div className='right'>
              <p className='main-container-text' style={{ margin: '0' }}></p>
            </div>
            <div className='right'>
              <img src={scissors} className='scissors-img' />
              <p className='main-container-text' style={{marginTop:'0px',marginBottom:'27px'}}>Надежная<br></br>доставка</p>
              <p className='scissors-text'>Упаковываем так, будто пупырка у нас бесконечная. Каждую отправку страхуем за свой счет. Вы ничем не рискуете</p>
            </div>
            <div className='right'>
              <img src={scissors} className='scissors-img' />
              <p className='main-container-text' style={{marginTop:'0px',marginBottom:'27px'}}>Сервисное<br></br> обслуживание</p>
              <p className='scissors-text'>Внутри гитары стоит наша печать. Если вдруг почувствуюте дискомфорт при игре, наши мастера вернут, как было :)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
