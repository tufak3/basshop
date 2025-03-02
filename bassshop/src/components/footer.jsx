import '../styles/footer.css'
import telega from '/tgsocial.svg'
import youtube from '/youtubesocial.svg'
import vk from '/vksocial.svg'
import whatsapp from '/whatsappsocial.svg'
import telephone from '/telephonefooter.svg'
function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-content-text">
                    <p>Главный телеграм канал о гитарах. Новости, акции, видео<br></br>Добро пожаловать!</p>
                </div>
                <div className="footer-content-links">
                <a href="https://t.me/zdohnuu" target='_blank' className='footer-content-links'>НАШ TELEGRAM КАНАЛ</a>
                </div>
                <div className="footer-content-about">
                <p>О нас</p>
                </div>
                <div className='footer-content-socials'>
                    <img src={telega} alt="TELEGRAM" />
                    <img src={youtube} alt="YOUTUBE" />
                    <img src={vk} alt="VK" />
                    <img src={whatsapp} alt="WHATSAPP" />
                    <img src={telephone} alt="TELEPHONE" />
                    <p className='number'>+7 (949) 467-48-64</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;
