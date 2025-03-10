import '../styles/navbar.css'
import shopLogo from '/Logo.svg'
import searchIcon from '/Search.svg'
import profileIcon from '/profile.svg'
import favoritesIcon from '/favorite.svg'
import cartIcon from '/cart.svg'
import LoginPopup from './Loginpopup.jsx'
import RegisterPopup from './Registerpopup.jsx'
import {useState} from 'react'
import { Route,Routes,Link } from 'react-router-dom'
function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleRegister = () => {
        setRegisterOpen(!registerOpen);
    };

    const openRegister = () => {
        setIsOpen(false);
        setRegisterOpen(true);
    };

    const openLogin = () => {
        setRegisterOpen(false);
        setIsOpen(true);
    };

    return(
        <>
        <div className='nav-container'>
            <div className='navbar'>
                <Link to={"/"} style={{textDecoration:'none'}}>
                <div className='logo'>
                    <img src={shopLogo} alt="logo" className='logo-img'/>
                </div>
                </Link>
                <Link to={"/"} style={{textDecoration:'none'}}>
                <div className='name'>
                <p>BASS <br></br> SHOP</p>
                </div>
                </Link>
                <div className='input-cont'>
                    <div className="search-wrapper">
                        <img src={searchIcon} alt="search" className="search-icon" />
                        <input 
                            type="text" 
                            placeholder='Просто начните вводить название' 
                            className='input-text'
                        />
                    </div>
                </div>
                <div className='contacts'>
                    <div className='contacts-button'>
                        <button className='contacts-button-text'>Контакты</button>
                    </div>
                    <div className='favorites-button'>
                        <a href="/favorites">
                            <img src={favoritesIcon} alt="Избранное" />
                        </a>
                    </div>
                    <div className='cart-button'>
                        <a href="/cart">
                            <img src={cartIcon} alt="Корзина" />
                        </a>
                    </div>
                    <div className='profile-button'>
                        <a onClick={toggleMenu}>
                            <img src={profileIcon} alt="Профиль" />
                        </a>
                    </div>
                </div>
                <div className='socials'>

                </div>
            </div>
            
        </div>
        {isOpen && <LoginPopup isOpen={isOpen} toggleMenu={toggleMenu} openRegister={openRegister} />}
        {registerOpen && <RegisterPopup isOpen={registerOpen} toggleRegister={toggleRegister} openLogin={openLogin} />}
        </>
    )
}
export default Navbar